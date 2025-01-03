    const express = require('express');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const path = require('path');
    const jwt = require('jsonwebtoken'); // For token-based authentication
    const cookieParser = require('cookie-parser'); // For parsing cookies

    const app = express();

    // Middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    // Connect to MongoDB
    mongoose
        .connect('mongodb://127.0.0.1:27017/expense_tracker', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));

    // Define Mongoose Schema
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        expenses: [
            {
                description: { type: String, required: true },
                amount: { type: Number, required: true },
                type: { type: String, required: true },
                date: { type: Date },
            },
        ],
    });

    // Create Mongoose Model
    const User = mongoose.model('User', userSchema);

    // Middleware to authenticate users
    function authenticateUser(req, res, next) {
        const token = req.cookies.authToken; // Token stored in cookies
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized access. Please log in.' });
        }

        try {
            const user = jwt.verify(token, process.env.JWT_SECRET || 'secretKey'); // Verify token
            req.user = user; // Attach user info to the request object
            next(); // Proceed to the next middleware/route handler
        } catch (error) {
            res.status(401).json({ error: 'Invalid or expired token. Please log in again.' });
        }
    }

    // Register Route
    app.post('/register', async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already registered.' });
            }

            const newUser = new User({ name, email, password });
            await newUser.save();

            res.status(201).json({ 
                message: 'User registered successfully!', 
                user: { id: newUser._id, name: newUser.name, email: newUser.email } 
            });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ error: 'Error registering user. Please try again.' });
        }
    });

    // Login Route
    app.post('/login', async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user || user.password !== password) {
                return res.status(400).json({ error: 'Invalid email or password.' });
            }

            // Generate token and set it in cookies
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secretKey', {
                expiresIn: '1h', // Token validity
            });

            res.cookie('authToken', token, { httpOnly: true }); // Secure cookie
            res.status(200).json({ 
                message: 'Login successful!', 
                user: { id: user._id, name: user.name, email: user.email } 
            });
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ error: 'Error logging in. Please try again.' });
        }
    });

    // Add Expense Route
    app.post('/add-expense', authenticateUser, async (req, res) => {
        console.log('Received Data:', req.body);
        const { description, amount, type, date } = req.body;
        console.log('Received Date:', date);
        try {
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const expenseDate = date ? new Date(date) : new Date();
            if (isNaN(expenseDate.getTime())) {
                return res.status(400).json({ error: 'Invalid date format' });
            }

            const newExpense = { description, amount, type, date: date || new Date() };
            user.expenses.push(newExpense);
            await user.save();

            res.status(200).json({ 
                message: 'Expense added successfully!', 
                expenses: user.expenses 
            });
        } catch (error) {
            console.error('Error adding expense:', error);
            res.status(500).json({ error: 'Failed to add expense.' });
        }
    });

    // Get All Expenses Route
    app.get('/get-expenses', authenticateUser, async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json({ expenses: user.expenses });
        } catch (error) {
            console.error('Error fetching expenses:', error);
            res.status(500).json({ error: 'Failed to fetch expenses.' });
        }
    });


    // Get Expense Summary by Type Route (For Pie Chart)
    app.get('/expense-summary', authenticateUser, async (req, res) => {
        try {
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const summary = user.expenses.reduce((acc, expense) => {
                acc[expense.type] = (acc[expense.type] || 0) + expense.amount;
                return acc;
            }, {});

            res.status(200).json({ summary });
        } catch (error) {
            console.error('Error fetching expense summary:', error);
            res.status(500).json({ error: 'Failed to fetch expense summary.' });
        }
    });

    // Logout Route
    app.post('/logout', (req, res) => {
        res.clearCookie('authToken'); // Clear the authentication token
        res.status(200).json({ message: 'Logout successful!' });
    });

    // Start the Server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });


Expense Tracker (MERN Stack)
A modern and intuitive web application designed to help users track and manage their expenses effortlessly. Built using the powerful MERN stack (MongoDB, Express.js, React, and Node.js), this application provides a seamless experience for logging, viewing, and analyzing expenses.

Key Features
🌟 User Authentication

Secure user registration and login using JWT (JSON Web Tokens).
Passwords are securely hashed for data protection.
📝 Add Expenses

Log expenses by providing:
Expense name
Amount
Category (e.g., Food, Transport)
Date
📊 Expense Visualization

A dynamic pie chart visualizes the expense breakdown by category in real-time.
📋 Expense History

View all logged expenses in a well-structured table with details like:
Expense name
Amount
Category
Date
Delete option for individual records
📁 Data Export

Export all expense records as a CSV file for offline use.
🔒 Secure Logout

Users can log out securely, clearing all session data and redirecting to the login page.
Tech Stack
Frontend
React.js: Build dynamic and interactive user interfaces.
HTML/CSS: Structure and style the web pages.
JavaScript: Add client-side logic and interactivity.
Backend
Node.js: Handle server-side logic and API requests.
Express.js: Build RESTful API endpoints seamlessly.
Database
MongoDB: Store user data, expenses, and categories in a flexible NoSQL database.
Authentication
JWT (JSON Web Tokens): Ensure secure user authentication and session management.
Version Control
Git & GitHub: Manage and track source code changes.
How It Works
User Authentication

Users register or log in securely.
On successful authentication, a JWT token is issued for session management.
Add Expenses

Fill in the form with details such as name, amount, category, and date.
Data is validated and stored in the database.
View Expense History

Logged expenses are displayed in a detailed table.
Users can delete any expense directly from the table.
Visualize Expenses

A pie chart dynamically updates to show expense categories' proportion.
Export Data

Users can export their entire expense data as a CSV file with one click.
Logout

Logging out securely clears user session tokens and redirects to the login page.
Installation
Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/Expense-Tracker-MERN.git
cd Expense-Tracker-MERN
Step 2: Install Dependencies
Backend
bash
Copy code
cd backend
npm install
Frontend
bash
Copy code
cd frontend
npm install
Step 3: Set Environment Variables
Backend
Create a .env file in the backend directory:

plaintext
Copy code
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
PORT=5000
Frontend
Update the API URL in the frontend configuration file (frontend/src/config.js) if needed.

Step 4: Start the Application
Backend
bash
Copy code
npm start
Frontend
bash
Copy code
npm start
The application will run at:

Frontend: http://localhost:3000
Backend: http://localhost:5000

Future Enhancements
📈 Analytics Dashboard: Add monthly and yearly expense trends.
🔄 Recurring Expenses: Allow users to set up recurring expenses.
🤝 Data Sharing: Enable users to share expense data with others.
🧾 PDF Export: Add functionality to export data as a PDF file.

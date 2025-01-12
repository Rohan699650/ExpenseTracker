Expense Tracker (MERN Stack)
A modern and intuitive web application designed to help users track and manage their expenses effortlessly. Built using the powerful MERN stack (MongoDB, Express.js, HTML, CSS, and JavaScript), this application ensures a smooth experience for logging, viewing, and analyzing expenses.

Key Features
🌟 User Authentication
Secure user registration and login using JWT (JSON Web Tokens).
Passwords are securely hashed to ensure data protection.
📝 Add Expenses
Users can log their expenses by providing the following details:

Expense Name
Amount
Category (e.g., Food, Transport, Utilities)
Date
📊 Expense Visualization
Real-time visualizations using a dynamic pie chart (powered by JavaScript libraries like Chart.js).
Displays a breakdown of expenses by category.
📋 Expense History
View all logged expenses in a structured table with the following columns:
Expense Name
Amount
Category
Date
Delete Option to remove specific records.
📁 Data Export
Export all expense records as a CSV file with a single click for offline analysis.
🔒 Secure Logout
Logout functionality clears user session data and securely redirects to the login page.
Tech Stack
Frontend
HTML/CSS: For structuring and styling web pages.
JavaScript: To add dynamic client-side functionality.
Backend
Node.js: Handles server-side logic and API requests.
Express.js: Simplifies the creation of RESTful API endpoints.
Database
MongoDB: Stores user data, expense records, and categories.
Authentication
JWT (JSON Web Tokens): Provides secure user authentication and session management.
Version Control
Git & GitHub: Facilitates version control and collaboration.
How It Works
1. User Authentication
Users can securely register or log in.
Upon successful login, a JWT token is issued for session management.
2. Add Expenses
A simple form allows users to input expense details (name, amount, category, and date).
Validated data is securely stored in the database.
3. View Expense History
A well-organized table displays all logged expenses.
Users can delete specific expenses directly from the interface.
4. Visualize Expenses
An interactive pie chart provides real-time insights into spending habits.
5. Export Data
Users can download expense data as a CSV file for offline use.
6. Logout
Secure logout functionality clears session tokens and redirects to the login page.


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
No dependencies required. The frontend is built with HTML, CSS, and JavaScript.

Step 3: Set Environment Variables
Backend
Create a .env file in the backend directory with the following content:

plaintext
Copy code
MONGO_URI=your-mongodb-connection-string  
JWT_SECRET=your-jwt-secret  
PORT=5000  
Step 4: Start the Application
Backend
bash
Copy code
npm start  
Frontend
Open the index.html file in your preferred web browser.

Future Enhancements
📈 Analytics Dashboard: Visualize monthly and yearly expense trends.
🔄 Recurring Expenses: Enable users to log recurring expenses.
🤝 Data Sharing: Allow users to share expense data with others.
🧾 PDF Export: Provide an option to export data as PDF reports.

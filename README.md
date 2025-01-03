Expense Tracker (MERN Stack)
This is a full-stack web application designed to track and manage personal expenses. The system allows users to log in securely, add expenses, view their expense history, and export their data. The project is built using the MERN stack, which consists of MongoDB, Express.js, React, and Node.js. This application demonstrates the efficiency of modern JavaScript technologies for building interactive and scalable web applications.

Features
User Authentication
Secure user login and registration using JSON Web Tokens (JWT).
User credentials are hashed for security.
Add Expenses
Users can log their expenses by filling out a form with details such as:
Expense name
Amount
Category (e.g., Food, Transport)
Date
View Expense History
Users can view a table displaying all their logged expenses.
Expenses are organized with columns for:
Name
Amount
Category
Date
Action (Delete)
Expense Breakdown
A pie chart is dynamically updated to show the breakdown of expenses by category.
Export Data
Users can export their expense data as a CSV file.
Logout
Users can securely log out of their accounts.
Technologies Used
Frontend:
React.js: For building a dynamic and interactive user interface.
HTML/CSS: For structuring and styling the web pages.
JavaScript: For client-side logic and interactivity.
Backend:
Node.js: For server-side logic and handling API requests.
Express.js: For creating RESTful API endpoints.
Database:
MongoDB: For storing user data, expenses, and categories.
APIs:
Custom endpoints for user authentication, expense management, and data export.
Authentication:
JWT (JSON Web Token): For secure user authentication and session management.
Version Control:
Git & GitHub: For source code management and version control.
How It Works
User Authentication
Users register or log in using their credentials.
The server validates the credentials and issues a JWT for secure session management.
Adding Expenses
Users fill out a form with details about their expenses.
The form is validated, and the data is sent to the backend for storage.
Viewing Expense History
Logged expenses are fetched from the database.
A table displays the expenses, organized by name, category, amount, and date.
Expense Breakdown
The application dynamically generates a pie chart showing the percentage distribution of expenses across categories.
Exporting Data
Users can click a button to export their expenses as a CSV file for offline use.
Logout
Users can log out securely, which clears their session token and redirects them to the login page.
Installation
To set up this project on your local machine, follow these steps:

1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/Expense-Tracker-MERN.git

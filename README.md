# 💰 Expense Tracker (MERN Stack)

A modern and intuitive web application that helps users **track and manage their expenses effortlessly**.  
Built with the robust **MERN stack** (MongoDB, Express.js, Node.js, and HTML/CSS/JS frontend), this application ensures a smooth experience for logging, viewing, and analyzing expenses.
https://budgetexpenserr.netlify.app/
---

## ✨ Key Features

### 🔐 User Authentication
- Secure **JWT-based authentication** (JSON Web Tokens)
- Passwords are **hashed** for added security

### 📝 Add Expenses
Log expenses with:
- Expense Name  
- Amount  
- Category (e.g., Food, Transport, Utilities)  
- Date  

### 📊 Expense Visualization
- Interactive **Pie Chart** (via Chart.js or similar)
- Real-time **breakdown by category**

### 📋 Expense History
- View all expenses in a structured table with:
  - Expense Name  
  - Amount  
  - Category  
  - Date  
  - Delete button for record removal

### 📁 Data Export
- Export all expenses to **CSV** format with one click

### 🔒 Secure Logout
- Clears session and securely redirects to login page

---

## 🛠️ Tech Stack

### ⚙️ Frontend
- **HTML5 & CSS3**: Layout and styling  
- **JavaScript**: Client-side logic and interactivity  

### 🔧 Backend
- **Node.js**: Runtime environment  
- **Express.js**: REST API and server logic  

### 🗃️ Database
- **MongoDB**: Stores users and expenses  

### 🛡️ Authentication
- **JWT (JSON Web Tokens)** for secure session handling  

### 🔄 Version Control
- **Git & GitHub** for version tracking and collaboration  

---

## 🚀 How It Works

1. **Authentication**  
   - Register/Login securely  
   - JWT is issued on login and used for protected routes  

2. **Add Expenses**  
   - Form-based input  
   - Data validated and saved to MongoDB  

3. **View History**  
   - All expenses displayed in an interactive table  
   - Users can delete individual records  

4. **Visualize Spending**  
   - Pie chart dynamically updates by category  

5. **Export Data**  
   - Generate and download CSV of all expenses  

6. **Logout**  
   - Clears local storage/session and redirects to login  

---

## 🧩 Installation Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/Expense-Tracker-MERN.git
cd Expense-Tracker-MERN
```

### Step 2: Install Dependencies
Backend
cd backend
npm install
Frontend

No setup needed – open index.html in any browser.
Step 3: Configure Environment Variables
Create a .env file inside the backend/ directory:
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
PORT=5000
npm start
Frontend

Just open the index.html file in your browser.

📈 Future Enhancements
📊 Analytics Dashboard: Track monthly/yearly spending trends

🔄 Recurring Expenses: Auto-log regular expenses

🔗 Data Sharing: Allow sharing with other users

🧾 PDF Export: Export data as PDF reports

🙌 Credits
Crafted with 💡 and 💻 by Rohan

📄 License
This project is licensed under the MIT License.

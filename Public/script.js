let expenses = []; // Store the list of expenses
let pieChart;
let editingIndex = -1; // Variable to store the index of the expense being edited

window.onload = function () {
    createPieChart();
    const expenseList = document.getElementById("expense-list");
    expenseList.style.display = 'none'; // Initially hide the expense list
    document.getElementById("export-btn").style.display = 'none'; // Hide export button initially
    setupLogoutButton(); // Setup logout button event
    displayWelcomeMessage(); // Display welcome message with user's name
     // Fetch user's expenses after login
     fetchExpenses();

};
function fetchExpenses() {
    const token = getCookie('authToken');  // Retrieve token from cookies
    console.log('Token:', token);  // Debugging line to check the token
    if (!token) {
        console.log("No token found, user is not logged in.");
        return;  // If no token, the user is not logged in, return early
    }

    fetch('/get-expenses', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.expenses) {
            expenses = data.expenses;  // Set the fetched expenses
            updateExpenseList(expenses); // Update the expense list table
            updateTotalExpense(expenses); // Update the total expense
            updateChart(); // Update the pie chart with the new data
            document.getElementById("expense-list").style.display = 'block'; // Show the list after fetching
        } else {
            console.error('Failed to fetch expenses:', data.error);
        }
    })
    .catch(error => console.error('Error fetching expenses:', error));
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Display a welcome message with the user's name
function displayWelcomeMessage() {
    const userName = localStorage.getItem('userName'); // Retrieve user's name from localStorage
    if (userName) {
        const header = document.querySelector(".header");
        const welcomeMessage = document.createElement("h2");
        welcomeMessage.textContent = `Welcome, ${userName}!`; // Add welcome text
        welcomeMessage.classList.add("welcome-message"); // Add a class for styling
        header.appendChild(welcomeMessage); // Append to the header section
    } else {
        // If no userName is found in localStorage, display a default welcome message
        const header = document.querySelector(".header");
        const welcomeMessage = document.createElement("h2");
        welcomeMessage.textContent = 'Welcome!'; // Default message
        welcomeMessage.classList.add("welcome-message");
        header.appendChild(welcomeMessage);
    }
}

document.getElementById("expense-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("expense-name").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (editingIndex === -1) {
        // Add the expense to the list (new expense)
        expenses.push({ name, amount, category });
    } else {
        // Edit the existing expense
        expenses[editingIndex] = { name, amount, category };
        editingIndex = -1; // Reset the editing index after editing
    }

    // Show the expense list if it's hidden
    document.getElementById("expense-list").style.display = 'block';
    document.getElementById("export-btn").style.display = 'inline-block';

    // Update the table, total, and chart
    updateExpenseList(expenses);
    updateTotalExpense(expenses);
    updateChart();

    // Reset the form
    document.getElementById("expense-form").reset();
});

// Other functions remain the same...

// Update the total expenses
function updateTotalExpense(expenseList) {
    const totalAmount = expenseList.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById("total-amount").textContent = `₹${totalAmount.toFixed(2)}`;
}

// Initialize the Pie Chart
function createPieChart() {
    const ctx = document.getElementById("expense-chart").getContext('2d');
    pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Food', 'Transport', 'Entertainment', 'Other'],
            datasets: [{
                label: 'Expenses by Category',
                data: [0, 0, 0, 0],
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'],
                borderColor: '#FFFFFF',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,  // Ensure the chart is responsive
            maintainAspectRatio: false  // Disable maintaining aspect ratio for resizing
        }
    });
}

// Update the Pie Chart with expense data
function updateChart() {
    const categories = ['Food', 'Transport', 'Entertainment', 'Other'];
    const categorySums = categories.map(category => {
        return expenses.filter(expense => expense.category === category)
            .reduce((sum, expense) => sum + expense.amount, 0);
    });

    pieChart.data.datasets[0].data = categorySums;
    pieChart.update();
}

// Update the expense list in the table
function updateExpenseList(expenseList) {
    const tableBody = document.getElementById("expense-list");
    tableBody.innerHTML = '';

    expenseList.forEach((expense, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            </td>
        `;
    });
}

// Filter expenses by category
document.getElementById("filter-category").addEventListener("change", function () {
    const selectedCategory = this.value;
    if (selectedCategory === "All") {
        updateExpenseList(expenses); // Show all expenses
        updateTotalExpense(expenses); // Show total for all expenses
    } else {
        const filteredExpenses = expenses.filter(expense => expense.category === selectedCategory);
        updateExpenseList(filteredExpenses); // Show filtered expenses
        updateTotalExpense(filteredExpenses); // Show total for filtered expenses
    }
});

// Export expenses to CSV
function exportToCSV() {
    const csvContent = 'Description,Amount,Category\n' + expenses.map(exp =>
        `${exp.name},${exp.amount},${exp.category}` // Add expense data to CSV
    ).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'expenses.csv');
    link.click();
}

// Edit an expense
function editExpense(index) {
    const expense = expenses[index];
    editingIndex = index; // Set the index of the expense being edited

    // Pre-fill the form with the expense data
    document.getElementById("expense-name").value = expense.name;
    document.getElementById("expense-amount").value = expense.amount;
    document.getElementById("expense-category").value = expense.category;

    // Change the button label to "Update" to indicate editing
    document.getElementById("submit-btn").textContent = 'Update Expense';
}

// Delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1); // Remove the expense from the array
    console.log("Expense Removed ",expenses)
    updateExpenseList(expenses); // Update the table
    updateTotalExpense(expenses); // Update the total expense
    updateChart(); // Update the chart
}

// Setup the logout button functionality
function setupLogoutButton() {
    document.getElementById("logout-btn").addEventListener("click", function () {
        window.location.href = "login.html";
    });
}

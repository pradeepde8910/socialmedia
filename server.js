// Import required modules
const express = require('express');
const mysql = require('mysql');

// Create Express application
const app = express();
const port = 3000; // You can change the port number if needed

// MySQL database configuration
const dbConfig = {
    host: 'localhost', // Change this if your database is hosted on a different server
    user: 'root', // Change this to your MySQL username
    password: 'root123', // Change this to your MySQL password
    database: 'sm' // Change this to your MySQL database name
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Express middleware to parse JSON bodies
app.use(express.json());

// Handle form submission
app.post('/submit_form', (req, res) => {
    // Get form data from request body
    const { username, email, password, phone } = req.body;

    // Execute database query to insert data
    pool.query('INSERT INTO users (username, email, password, phone) VALUES (?, ?, ?, ?)',
        [username, email, password, phone],
        (error, results) => {
            if (error) {
                console.error('Error inserting data:', error);
                res.status(500).send('Error inserting data');
            } else {
                console.log('Data inserted successfully');
                res.send('Data inserted successfully');
            }
        }
    );
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

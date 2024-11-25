const dotenv = require('dotenv');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');


const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.get('/api', (req, res) => {
    res.send('Backend is working!');
    
});

app.post('/api/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user exists
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            // User not found
            return res.status(404).send('User not found');
        }

        // Check if the password matches
        const user = result.rows[0];
        if (user.password !== password) {
            return res.status(401).send('Incorrect password');
        }
        // Success
        // Include user data in the response
        return res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email, // Ensure this column exists in your DB
        });

    } catch (err) {
        console.error('Error during sign-in:', err.message);
        res.status(500).send('Server error');
    }
});


app.get('/api/db', (req, res) => {
    pool.query('SELECT 1', (err, result) => {
        if (err) {
            console.error('Database connection error:', err.stack);
            res.status(500).send('Database connection error');
        } else {
            console.log('Database connection successful:', result.rows);
            res.json({ success: true, result: result.rows });
        }
    });
});



app.post('/api/users', async (req, res) => {
    const { name, email ,password } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        if(err.code === '23505')
        {
            // PostgreSQL error code for unique constraint violation
            return res.status(400).send("Duplicate key violation: users_email_key");
        }
        res.status(500).send('Server error');

    }
});
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

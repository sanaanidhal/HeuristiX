const dotenv = require('dotenv');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const moment = require('moment');



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
    password: String(process.env.DB_PASSWORD),
    port: process.env.DB_PORT,
});

app.get('/api', (req, res) => {
    res.send('Backend is working!');
    
});

app.post('/api/update-profile-picture', async (req, res) => {
    const { userId, imageUrl } = req.body;
    try {
        const result = await pool.query(
            'UPDATE users SET profilepic = $1 WHERE id = $2 RETURNING id, name, email, profilepic',
            [imageUrl, userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'Profile picture updated successfully',
            user: result.rows[0],
        });
    } catch (err) {
        console.error('Error updating profile picture:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});


app.get('/api/update-profile-picture/test', async (req, res) => {
    const testUserId = 1; // Replace with a valid user ID from your database
    const testImageUrl = "https://res.cloudinary.com/dbj2jhkr0/image/upload/v123456789/example.jpg";

    try {
        const result = await pool.query(
            'UPDATE users SET profilepic = $1 WHERE id = $2 RETURNING *',
            [testImageUrl, testUserId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            message: 'Profile picture updated successfully',
            user: result.rows[0],
        });
    } catch (err) {
        console.error('Error updating profile picture:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/posts' , async (req, res) => {
    try{
        const result =  await pool.query(
        `
            SELECT posts.id, posts.title, posts.created_at, posts.category, posts.timetoread, posts.postdesc, users.name
            FROM posts
            JOIN users ON posts.user_id = users.id
            ORDER BY posts.created_at DESC
        `
        );
        res.json(result.rows); 

    } catch(err){
        console.error(err.message);
         res.status(500).send("Server Error");
    }
});

app.get('/api/posts/:id' , async (req, res) => {
    try{
        const {id} = req.params;
        const result =  await pool.query(
        `
            SELECT posts.id, posts.title,posts.content, posts.created_at,posts.timetoread, posts.category, users.name as name
            FROM posts 
            JOIN users ON posts.user_id = users.id
            WHERE posts.id = $1
            `,
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Post not found' });
          }
          res.json(result.rows[0]);
        } catch(err){
        console.error(err.message);
         res.status(500).send("Server Error");
    }
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
            email: user.email, 
            profilepic: user.profilepic, 
            created_at: user.created_at,
            location: user.location,
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
    const { name, email ,password, location } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email, password, location) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, password, location]
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
app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Fetch the user, including their profile picture URL
        const result = await pool.query(
            'SELECT id, name, email, profilepic , created_at FROM users WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(result.rows[0]); // Return user data
    } catch (err) {
        console.error('Error fetching user:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

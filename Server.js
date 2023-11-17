
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost', // Assuming your MySQL server is running on localhost
  user: 'root', // Your MySQL username
  password: 'Mathumathy12345',
  database: 'hobby',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform authentication using the MySQL database
  // Replace the following example with your actual authentication logic
  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) {
        console.error('MySQL query error:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
      } else if (results.length > 0) {
        res.json({ success: true, message: 'Authentication successful' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

   
    db.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, results) => {
            if (err) {
                console.error('MySQL query error:', err);
                res.status(500).json({ success: false, message: 'Internal server error' });
            } else if (results.length > 0) {
                res.json({ success: true, message: 'Authentication successful' });
            } else {
                res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
        }
    );
});

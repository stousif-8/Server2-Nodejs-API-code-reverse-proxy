const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to handle CORS
app.use(cors());

// Route to handle /api/message requests
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Node.js API!' });
});

// Handle root requests (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


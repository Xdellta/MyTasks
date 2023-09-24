const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./config/database');
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use(cors());

// Połączenie się z bazą danych
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Ścieżki obsługujące uwierzytelnianie
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
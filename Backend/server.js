const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use(cors());

// Ścieżki obsługujące uwierzytelnianie
app.use('/api', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
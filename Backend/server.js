const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const automated1 = require('./helpers/sessionDeletionDB');

app.use(bodyParser.json());
app.use(cors());
app.use('/api', authRoutes);

automated1.start();

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
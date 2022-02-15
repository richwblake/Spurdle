const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3030;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/words', require('./routes/wordRoutes'));

app.listen(port, () => console.log(`Backend server started on port ${port}`));
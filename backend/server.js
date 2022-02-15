const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3030;

const app = express();

app.listen(port, () => console.log(`Backend server started on port ${port}`));
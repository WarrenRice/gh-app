const express = require('express');
const app = express();
//require('dotenv').config();

const api_key = process.env.API_KEY;
app.listen(3000, () => console.log('listening to 3000'));
app.use(express.static('public'));

const express = require('express');
const app = express();
//require('dotenv').config();

const api_key = process.env.API_KEY;
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to ${port}`));
app.use(express.static('public'));

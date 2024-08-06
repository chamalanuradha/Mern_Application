const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const postRoutes = require('./routes/posts');


app.use(postRoutes);





const PORT = 8080;
const DB_URL = 'mongodb+srv://anuradhachamal14:chamal98@mernapp.jlc51bz.mongodb.net/?retryWrites=true&w=majority&appName=MernApp';

mongoose.connect(DB_URL)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database connection error', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
})
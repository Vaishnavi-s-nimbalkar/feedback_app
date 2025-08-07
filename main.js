
const express = require('express');
const db=require("./config/db")
const dotenv = require('dotenv');
const feedbackRoutes = require('./routes/feedbackRoutes');
const connectDB = require('./config/db');

dotenv.config();

const app = express();


app.use(express.json());


app.use('/api/feedback', feedbackRoutes);
connectDB()

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

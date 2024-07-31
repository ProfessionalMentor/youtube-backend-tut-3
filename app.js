require ('dotenv').config();
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/db.js';


const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
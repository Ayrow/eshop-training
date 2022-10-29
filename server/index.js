import express from 'express';

const app = express();

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';

app.use(express.json());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

import express from 'express';

const app = express();
import dotenv from 'dotenv';
import connectDB from './db/connect';
dotenv.config();

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

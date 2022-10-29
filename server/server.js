import express from 'express';

const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());

const port = 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

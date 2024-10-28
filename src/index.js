import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

dotenv.config();

connectDB();
const app = express();



app.listen(process.env.PORT, ()=>{
  try {
    console.log(`Server is running on PORT : ${process.env.PORT}`);
  } catch (error) {
    console.error("Error in starting server :", error)
  }
})
















/*
(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    app.on('error', (error)=>{
      console.error("ERROR :",error);
      throw error;
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`App running on PORT NO: ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})
*/
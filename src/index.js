import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from './app.js'

dotenv.config();

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    try {
      console.log(`Server is running on PORT : ${process.env.PORT}`);
    } catch (error) {
      console.error("Error in starting server :", error)
    }
  })
})
.catch((err)=>{
  console.error("MONGOD DB connection error :", err)
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
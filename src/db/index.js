import mongoose from 'mongoose';

const connectDB = async ()=>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`MongoDB connected!! DB host ${connectionInstance.connections[0].host}`)
  } catch (error) {
    console.error("MongoDB connect ERROR :", error);
    process.exit(1);
  }
}

export default connectDB;
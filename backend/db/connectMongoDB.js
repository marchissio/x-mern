import mongoose from "mongoose";
mongoose.set("debug", true);
const connectMongoDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${(await conn).connection.host}`);
  } catch (error) {
    console.error(`Error connecting to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;

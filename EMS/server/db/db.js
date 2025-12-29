import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

export default connectToDatabase;

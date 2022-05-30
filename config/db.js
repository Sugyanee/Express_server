import mongoose from "mongoose";
import config from "config";

const connectDB = async () => {
  try {
    const dbUri = config.get("mongouri");
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch {
    console.log("DB not connected");
    process.exit(1);
  }
};
export default connectDB;

import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
const connectDB = async () => {
  try {
    const connectedInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );
    console.log(connectedInstance.connection.host);
  } catch (e) {
    console.log("Error : ", e);
    process.exit(1);
  }
};
export default connectDB;

import mongoose from "mongoose";

const connection = {};
const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using exisiting connection");
      return;
    }
    const db = await mongoose.connect(
      "mongodb+srv://alihassan478:03176113413Ali@cluster0.x5einct.mongodb.net/"
    );

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to mongoo DB:", error);
  }
};

export default connectToDb;

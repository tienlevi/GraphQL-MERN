import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/graphql-app";

// Connect to MongoDB
async function Connect() {
  try {
    mongoose
      .connect(MONGODB_URI)
      .then(() => {
        console.log("🍃 MongoDB connected successfully");
      })
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
      });

    // Get the default connection
  } catch (error) {
    console.log(error);
  }
}

export default Connect;

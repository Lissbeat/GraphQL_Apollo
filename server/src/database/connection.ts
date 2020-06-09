import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("connected to database");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
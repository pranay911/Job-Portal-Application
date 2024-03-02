import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Database Connected Successfully!! on Portal ${mongoose.connection.host} `
    );
  } catch (err) {
    console.log(`MongoDb Error: ${err}`);
  }
};

export default connectDB;

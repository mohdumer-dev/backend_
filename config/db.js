import mongoose from "mongoose";

// .env
import dotenv from "dotenv";
dotenv.config();

//Connection Link

const DbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      
    })
    .then(() => {
      console.log("Db connection sucessfull");
    })
    .catch((err) => {
      console.log("DB failed");
      console.error(err);
    });
};

export default DbConnection;

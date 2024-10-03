import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = "mongodb://localhost:27017/Taskers4";

export const dbConnectMongoose = () => {
  const dbURI = "mongodb://localhost:27017/Taskers4";
  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("connected to database via mongoose");
    })
    .catch((error) => {
      console.log(error);
    });
};

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
export const connectToMongoDB = async () => {
  if (!client) {
    try {
      client = await MongoClient.connect(uri, options);
      console.log("Connected to MongoDB via mongodbClient");
    } catch (error) {
      console.log(error);
    }
  }
  return client;
};

export const getConnectedClient = () => client;

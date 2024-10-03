import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/indexRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import { connectToMongoDB, dbConnectMongoose } from "./config/db.js";

dotenv.config();

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env._PORT || 4000;

app.use("/api", indexRoutes);

app.get("/hello", (req, res) => {
  res.status(200).json({ mssg: ["Buchi Cutie", "BiNoNb0", "PoNp0"] });
});

const startServer = async () => {
  await dbConnectMongoose();
  await connectToMongoDB();
  app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
  });
};
startServer();

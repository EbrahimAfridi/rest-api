import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Create Express server
const app = express();

// Express configuration
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("App is running at http://localhost:3000 in development mode");
  console.log("Press CTRL-C to stop\n");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as  string || "https://localhost:27017").then(() => {
  console.log("Connected to MongoDB");
}
).catch((err) => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  process.exit();
});

export default server;

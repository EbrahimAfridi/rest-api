require("dotenv").config({ path: [".env.local", ".env"] });
const express = require("express");
const workOutRouter = require("./routes/workout");
const { default: mongoose } = require("mongoose");

// Create an express app
const app = express();

// Middleware
app.use(express.json());

app.use("/api/workouts", workOutRouter);
// will goto server/routes/workout.js and /api/workouts/ will be the base path

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Start the server only when connected to DB
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
    console.log("MDB Connected :)");
  })
  .catch((err) => console.error(err));

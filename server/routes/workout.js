const express = require("express");
const workoutModel = require("../models/workout-model");
const router = express.Router();

// GET /api/workouts => '/' from below
router.get("/", (req, res) => {
  res.json({ message: "GET /api/workouts" });
});

// POST /api/workouts => '/' from below
router.post("/", async (req, res) => {
  const { title, reps, weight } = req.body;
  try {
    if (!title || !reps || !weight) {
      res.send("Please provide all fileds.");
    }
    const workout = await workoutModel.create({
      title,
      reps,
      weight,
    });
    res.status(200).json({ workout: workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/workouts/:id => '/:id' from below
router.get("/:id", (req, res) => {
  res.json({ message: `GET /api/workouts/${req.params.id}` });
});

// DELETE /api/workouts/:id => '/:id' from below
router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE /api/workouts/${req.params.id}` });
});

// PATCH /api/workouts/:id => '/:id' from below
router.patch("/:id", (req, res) => {
  res.json({ message: `PATCH /api/workouts/${req.params.id}` });
});

module.exports = router;

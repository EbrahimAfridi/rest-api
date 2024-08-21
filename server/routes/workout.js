const express = require("express");
const {
  createWorkout,
  deleteWorkout,
  updateWorkout,
  getAllWorkouts,
  getSignleWorkout,
} = require("../controllers/workout-controller");
const router = express.Router();

// GET /api/workouts => '/' from below
router.get("/", getAllWorkouts);

// POST /api/workouts => '/' from below
router.post("/", createWorkout);

// GET /api/workouts/:id => '/:id' from below
router.get("/:id", getSignleWorkout);

// DELETE /api/workouts/:id => '/:id' from below
router.delete("/:id", deleteWorkout);

// PATCH /api/workouts/:id => '/:id' from below
router.patch("/:id", updateWorkout);

module.exports = router;

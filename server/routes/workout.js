const express = require("express");

const router = express.Router();

// GET /api/workouts => '/' from below 
router.get("/", (req, res) => {
  res.json({ message: "GET /api/workouts" });
});

// POST /api/workouts => '/' from below
router.post("/", (req, res) => {
  res.json({ message: "POST /api/workouts" });
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
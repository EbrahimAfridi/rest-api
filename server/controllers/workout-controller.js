const workoutModel = require("../models/workout-model");

// GET ALL
const getAllWorkouts = async (req, res) => {
  const allWorkouts = await workoutModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(allWorkouts);
};

// GET SINGLE
const getSignleWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await workoutModel.findById(id);
    res.status(200).json(workout);
  } catch (err) {
    console.error(err);
    res.status(400).send("Something went wrong while fetching single workout.");
  }
};

// CREATE NEW
const createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;

  try {
    if (!title || !reps || !weight) {
      res.status(400).send("Please provide all fileds.");
    }

    const workout = await workoutModel.create({ title, reps, weight });

    res.status(200).json({ workout: workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    await workoutModel.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "Workout deleted succesfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    await workoutModel.findOneAndUpdate({ _id: id }, { ...req.body });
    res.status(200).json({ message: "Workout updated succesfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
  deleteWorkout,
  updateWorkout,
  getAllWorkouts,
  getSignleWorkout,
};

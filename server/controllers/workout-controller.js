const workoutModel = require("../models/workout-model");

// GET ALL
const getAllWorkouts = async (req, res) => {
  const allWorkouts = await workoutModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(allWorkouts);
};

// GET SINGLE
const getSignleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await workoutModel.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// CREATE NEW
const createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;

  try {
    // if (!title || !reps || !weight) {
    //   return res.status(400).json({ error: "Please provide all fields." });
    // }
    const workout = await workoutModel.create({ title, reps, weight });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const deletedWorkout = await workoutModel.findOneAndDelete({ _id: id });

  if (!deletedWorkout) {
    return res.status(404).json({ error: "Workout not found." });
  }

  res.status(200).json({ message: "Workout deleted successfully." });
};

// UPDATE
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const updatedWorkout = await workoutModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!updatedWorkout) {
    return res.status(404).json({ error: "Workout not found." });
  }

  res.status(200).json({ message: "Workout updated successfully." });
};

module.exports = {
  createWorkout,
  deleteWorkout,
  updateWorkout,
  getAllWorkouts,
  getSignleWorkout,
};

const mongoose = require("mongoose");

const workOutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    reps: {
      type: Number,
      require: true,
    },
    weight: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("workOutModel", workOutSchema);

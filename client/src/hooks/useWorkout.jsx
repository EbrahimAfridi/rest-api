import { WorkoutContext } from "../context/workout-context";
import React from "react";

const useWorkout = () => {
  const context = React.useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout hook must be used inside of the WorkoutContextProvider."
    );
  }

  return context;
};

export default useWorkout;

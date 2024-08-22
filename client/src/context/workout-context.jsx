import React from "react";
import { workoutsReducer } from "../helpers/workoutReducer";

export const WorkoutContext = React.createContext();

const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(workoutsReducer, {
    workouts: [],
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;

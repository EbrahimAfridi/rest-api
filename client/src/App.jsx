import "./App.css";
import React from "react";
import WorkoutDetails from "./components/WorkoutDetails";
import Form from "./components/Form";
import useWorkout from "./hooks/useWorkout";

function App() {
  const { workouts, dispatch } = useWorkout();
  React.useEffect(() => {
    const fetchAllWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/workouts");
        const data = await res.json();

        if (res.ok) {
          dispatch({ type: "GET_WORKOUTS", payload: data });
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAllWorkouts();
  }, []);

  return (
    <main className="main">
      <div className="App">
        {workouts.map((workout) => {
          return <WorkoutDetails key={workout._id} workout={workout} />;
        })}
      </div>
      <Form />
    </main>
  );
}

export default App;

import "./App.css";
import React from "react";
import WorkoutDetails from "./components/WorkoutDetails";
import Form from "./components/Form";

function App() {
  const [workouts, setWorkouts] = React.useState([]);

  React.useEffect(() => {
    const fetchAllWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/workouts");
        const data = await res.json();

        if (res.ok) {
          setWorkouts(data);
        } else {
          console.error("Error aagaya :(");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAllWorkouts();
  }, []);

  return (
    <main className="App">
      {workouts.map((workout) => {
        return <WorkoutDetails key={workout._id} workout={workout} />;
      })}
      <Form />
    </main>
  );
}

export default App;

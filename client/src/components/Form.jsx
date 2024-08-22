import React from "react";
import useWorkout from "../hooks/useWorkout";

const Form = () => {
  const { dispatch } = useWorkout();
  const [title, setTitle] = React.useState("");
  const [reps, setReps] = React.useState(12);
  const [weight, setWeight] = React.useState(10);
  const [error, setError] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const workout = { title, reps, weight };
    console.log(workout);

    const response = await fetch("http://localhost:3000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      console.error(data.error);
    } else {
      setTitle("");
      setReps(12);
      setWeight(10);
      setError(null);
      dispatch({ type: "ADD_WORKOUT", payload: data });
      console.log("New workout added.");
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <label htmlFor="title">Excercise Name</label>
      <input
        placeholder="Name"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="reps">Reps</label>
      <input
        type="number"
        name="reps"
        id="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        name="weight"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button type="submit">Add ➕</button>
    </form>
  );
};

export default Form;

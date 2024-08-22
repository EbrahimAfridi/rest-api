const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Weight:</strong> {workout.weight} kg
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        <em>{new Date(workout.createdAt).toLocaleString()}</em>
      </p>
    </div>
  );
};

export default WorkoutDetails;

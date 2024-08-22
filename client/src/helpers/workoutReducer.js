export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "GET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "ADD_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

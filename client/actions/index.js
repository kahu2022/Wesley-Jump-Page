export const ADD_WORKOUT = "ADD_WORKOUT";

export function addNewWorkout(currentWorkout) {
  return {
    type: ADD_WORKOUT,
    workout: currentWorkout,
  };
}
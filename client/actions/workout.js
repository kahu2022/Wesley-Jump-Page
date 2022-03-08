import { addSession, updateSession } from "../api"

export const ADD_SESSION = "ADD_SESSION";

export function addSessionToStore (workoutSession) {
  return {
    type: ADD_SESSION,
    workout: workoutSession
  };
}

// THUNKS

export function addSessionToDb (session) {
  return (dispatch) => {
      return addSession(session)
          .then((idOfAddedSession) => {
              const sessionInclID = {...session, id: idOfAddedSession}
              dispatch(addSessionToStore(sessionInclID))
              return null
          })
      .catch ( err => {
          const errMessage = err.response?.text || err.message
          console.log(errMessage)
          return null
          })
  }
}

export function updateSessionInDb (session) {
  return (dispatch) => {
      return updateSession(session)
          .then((countUpdated) => {
              dispatch(addSessionToStore(session))
              return null
          })
      .catch ( err => {
          const errMessage = err.response?.text || err.message
          console.log(errMessage)
          return null
          })
  }
}
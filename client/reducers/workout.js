import { ADD_SESSION } from '../actions/workout'

function workout(state = {}, action) {
    switch (action.type) {
        case ADD_SESSION:
            return action.workout
        default:
            return state
    }
}

export default workout
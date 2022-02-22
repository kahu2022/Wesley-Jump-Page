import { ADD_WORKOUT } from '../actions/'

function workout (state = {}, action) {
    switch (action.type) {
        case ADD_WORKOUT:
            state = action.workout
          return state
        default:
            return state
    }
}

export default workout
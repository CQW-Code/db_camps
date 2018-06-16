import {
  CAMPS,
} from '../actions/camps'

const camps = (state = [], action ) => {
  switch(action.type) {
    case CAMPS:
      return action.camps
    default:
      return state;
  }
}

export default camps;

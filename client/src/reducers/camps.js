import { CAMPS, ADD_CAMP, UPDATE_CAMP, DELETE_CAMP } from "../actions/camps";

const camps = (state = [], action) => {
  switch (action.type) {
    case CAMPS:
      return action.camps;
    case ADD_CAMP:
      return [action.camp, ...state];
    case UPDATE_CAMP:
      return state.map(c => {
        if (c.id === action.camp.id) return action.camp;
        return c;
      });
    case DELETE_CAMP:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};

export default camps;

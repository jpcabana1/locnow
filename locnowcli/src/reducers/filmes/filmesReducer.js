import { CARREGARFILMES } from "./filmesActions";

export const filmesReducer = (state = [], action) => {
  switch (action.type) {
    case CARREGARFILMES: {
      return action.payload;
    }
    default:
      return state;
  }
};

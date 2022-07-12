import { fromJS } from "immutable";
import { constants } from ".";

const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANG_LOGIN:
      return state.set("login", action.value);
    case constants.LOG_OUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};

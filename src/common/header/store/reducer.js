import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 5,
  mouseIn: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set("focused", false);
    case constants.CHANG_LIST:
      return state.set("list", action.data).set("totalPage", action.totalPage);
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANG_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};

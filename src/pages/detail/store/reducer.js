import { fromJS } from "immutable";
import { constants } from ".";

const defaultState = fromJS({
  title: "aa",
  content: "<a>bbaaa</a>",
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANG_DETAIL:
      //   console.log(action);
      return state.merge({
        title: action.title,
        content: action.content,
      });
    default:
      return state;
  }
};

import axios from "axios";
import { fromJS, List } from "immutable"; //List()方法转换数组只能转换一层
import { constants } from ".";

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      dispatch(changHomeData(result));
    });
  };
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      dispatch(addHomeList(res.data.data, page + 1));
    });
  };
};

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_SHOW,
  show,
});

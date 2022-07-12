import axios from "axios";
import { constants } from ".";
const changeDetail = (title, content) => {
  return {
    type: constants.CHANG_DETAIL,
    title,
    content,
  };
};

export const getDetail = (id) => {
  return (dispatch) => {
    axios
      .get("/api/detail.json")
      .then((result) => {
        console.log("detail");
        dispatch(
          changeDetail(result.data.data.title, result.data.data.content)
        ); //注意ajax返回的数据在.data.data中
      })
      .catch(() => {
        console.log("ajax error");
      });
  };
};

import axios from "axios";
import { constants } from ".";

const changLogin = () => ({
  type: constants.CHANG_LOGIN,
  value: true,
});

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get(`/api/login.json?account=${account}&password=${password}`)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          dispatch(changLogin());
        } else {
          alert("登录失败");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logout = () => ({
  type: constants.LOG_OUT,
  value: false,
});

import { getUsersData } from "../../components/api/api";

export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILED = "USERS_FAILED";

export function getUsers() {
  return function (dispatch) {
    dispatch({
      type: USERS_REQUEST,
    });
    getUsersData()
      .then((res) => {
        dispatch({
          type: USERS_SUCCESS,
          users: res,
        });
      })
      .catch(() => {
        dispatch({
          type: USERS_FAILED,
        });
      });
  };
}

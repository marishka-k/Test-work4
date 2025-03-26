import { getCommentsData} from "../../components/api/api";

export const COMMENTS_REQUEST = "COMMENTS_REQUEST";
export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS";
export const COMMENTS_FAILED = "COMMENTS_FAILED";

export function getComments(filter) {
  return function (dispatch) {
    dispatch({
      type: COMMENTS_REQUEST,
    });
    getCommentsData(filter)
      .then((res) => {
        dispatch({
          type: COMMENTS_SUCCESS,
          comments: res,
        });
      })
      .catch(() => {
        dispatch({
          type: COMMENTS_FAILED,
        });
      });
  };
}

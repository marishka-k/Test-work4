import { getPostsData } from "../../components/api/api";

export const POSTS_REQUEST = "POSTS_REQUEST";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_FAILED = "POSTS_FAILED";

export function getPosts(filter) {
  return function (dispatch) {
    dispatch({
      type: POSTS_REQUEST,
    });
    getPostsData(filter)
      .then((res) => {
        dispatch({
          type: POSTS_SUCCESS,
          posts: res,
        });
      })
      .catch(() => {
        dispatch({
          type: POSTS_FAILED,
        });
      });
  };
}

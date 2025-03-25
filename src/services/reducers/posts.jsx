import { POSTS_FAILED, POSTS_REQUEST, POSTS_SUCCESS } from "../actions/posts";

const postsInitialState = {
  posts: [],
  postsRequest: false,
  postsFailed: false,
};

export const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {

    case POSTS_FAILED: {
      return {
        ...state,
        postsRequest: false,
        postsFailed: true,
      };
    }

    case POSTS_REQUEST: {
      return {
        ...state,
        postsRequest: true,
        postsFailed: false,
      };
    }

    case POSTS_SUCCESS: {
      return {
        ...state,
        postsRequest: false,
        postsFailed: false,
        posts: action.posts,
      };

    }

    default: {
      return state;
      
    }
  }
};

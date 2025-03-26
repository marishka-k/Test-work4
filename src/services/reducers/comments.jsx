import { COMMENTS_FAILED, COMMENTS_REQUEST, COMMENTS_SUCCESS } from "../actions/comments";

const commentsInitialState = {
  comments: [],
  commentsRequest: false,
  commentsFailed: false,
};

export const commentsReducer = (state = commentsInitialState, action) => {
  switch (action.type) {

    case COMMENTS_FAILED: {
      return {
        ...state,
        commentsRequest: false,
        commentsFailed: true,
      };
    }

    case COMMENTS_REQUEST: {
      return {
        ...state,
        commentsRequest: true,
        commentsFailed: false,
      };
    }

    case COMMENTS_SUCCESS: {
      return {
        ...state,
        commentsRequest: false,
        commentsFailed: false,
        comments: action.comments,
      };

    }

    default: {
      return state;
      
    }
  }
};

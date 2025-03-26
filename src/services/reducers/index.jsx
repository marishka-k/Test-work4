import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { postsReducer } from "./posts";
import { commentsReducer } from "./comments";



export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
});

import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { postsReducer } from "./posts";
//import { usersReducerUsername } from "./users-username";


export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  //usersUsername: usersReducerUsername
});

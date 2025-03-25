import { USERS_FAILED, USERS_REQUEST, USERS_SUCCESS } from "../actions/users";

const usersInitialState = {
  users: [],
  usersRequest: false,
  usersFailed: false,
};

export const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {

    case USERS_FAILED: {
      return {
        ...state,
        usersRequest: false,
        usersFailed: true,
      };
    }

    case USERS_REQUEST: {
      return {
        ...state,
        usersRequest: true,
        usersFailed: false,
      };
    }

    case USERS_SUCCESS: {
      return {
        ...state,
        usersRequest: false,
        usersFailed: false,
        users: action.users,
      };

    }

    default: {
      return state;
      
    }
  }
};

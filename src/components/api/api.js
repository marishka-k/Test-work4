
import { checkResponse } from "../../utils/check-response";
import { URL } from "../../utils/constats";

const config = {
  url: URL,
  headers: {
    "Content-type": "application/json",
  },
};

export const getPostsData = async (filter) => {  
  const res = await fetch(`${config.url}/posts?${filter}`, {  
    method: "GET",
    headers: config.headers,
  });
  return checkResponse(res);
};

export const getUsersData = async () => {  
  const res = await fetch(`${config.url}/users`, {  
    method: "GET",
    headers: config.headers,
  });
  return checkResponse(res);
};

export const getCommentsData = async (filter) => {  
  const res = await fetch(`${config.url}/comments?${filter}`, {  
    method: "GET",
    headers: config.headers,
  });
  return checkResponse(res);
};

/* export const getUsersDataId = async (filter) => {  
  const res = await fetch(`${config.url}/users?${filter}`, {  
    method: "GET",
    headers: config.headers,
  });
  return checkResponse(res);
};

export const getUsersDataUserName = async (filter) => {  
  const res = await fetch(`${config.url}/users?${filter}`, {  
    method: "GET",
    headers: config.headers,
  });
  return checkResponse(res);
};
 */
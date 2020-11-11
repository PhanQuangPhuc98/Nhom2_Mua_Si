import {
  GET_USER,
} from "./type";

export const getUserInfo = data => ({
  type: GET_USER,
  payload: data
});

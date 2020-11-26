import {
  GET_USER,
  GET_PUCHASE,
} from "./type";

export const getUserInfo = data => ({
  type: GET_USER,
  payload: data
});
export const getPurchase = data => ({
  type: GET_PUCHASE,
  payload: data
})

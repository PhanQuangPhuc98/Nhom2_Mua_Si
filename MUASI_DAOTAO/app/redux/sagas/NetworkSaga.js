import { put, takeEvery, call } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_PUCHASE,
  GET_PUCHASE_SUCCESS,
  GET_PUCHASE_FAIL
} from "../actions/type";

import * as API from "../../constants/Api";

export function* getUserInfor(payload) {
  try {
    const response = yield call(API.requestUser, payload);
    yield put({ type: GET_USER_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_USER_FAIL, payload: err });
  }
}
export function* getPurchase(payload) {
  try {
    const response = yield call(API.ListPost, payload);
    yield put({ type: GET_PUCHASE_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_PUCHASE_FAIL, payload: err });
  }
}
export const watchGetUser = takeEvery(GET_USER, getUserInfor);
export const watchGetPurchase = takeEvery(GET_PUCHASE, getPurchase);


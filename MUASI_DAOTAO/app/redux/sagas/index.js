import {
  watchGetUser,
  watchGetPurchase,
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetUser;
  yield watchGetPurchase;
}

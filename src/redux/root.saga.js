import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSaga } from "./user/user.sagas";

function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSaga)]);
}


export default rootSaga;
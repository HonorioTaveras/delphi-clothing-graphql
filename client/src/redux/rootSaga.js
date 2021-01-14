import { all, call } from 'redux-saga/effects';

import { ShopSagas } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';

export default function* rootSaga() {
  yield all([call(ShopSagas), call(userSagas), call(cartSagas)]);
}

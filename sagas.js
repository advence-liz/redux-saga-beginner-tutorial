// import { delay } from 'redux-saga'

import { all, call, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects'
const delay = (ms) => new Promise(res => setTimeout(res, ms))
let idx = 0

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  // const current  = idx++
  // console.log()
  yield delay(1000)
  yield put({ type: 'INCREMENT',v:2 })
}

// export function* increment() {
//   yield put({ type: 'INCREMENT',v:1})
// }

// export function* incrementLog(...rest) {
//   console.log(rest)
// }

export function* watchIncrementAsync() {

  // yield takeEvery('INCREMENT', incrementLog)

  yield takeEvery('INCREMENT_ASYNC', incrementAsync)

  yield takeLeading('INCREMENT_LEADING', incrementAsync)

  yield takeLatest('INCREMENT_LAST', incrementAsync)
}

// single entry point to start all Sagas at once
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}

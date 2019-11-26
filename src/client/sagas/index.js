import { all } from 'redux-saga/effects';
import cinemaSaga from './cinemaSaga';

export default function* rootSaga() {
    yield all([
        cinemaSaga(),
    ]);
}
import {put, call, takeEvery, apply, all} from 'redux-saga/effects';
import * as actions from '../actions';
import React from "react";
import {sendRequest} from "../utils/utils";

export default function* watchUsersSaga() {
    yield takeEvery(actions.getAllMovies().type, getMovieListFromUrl);
    yield takeEvery(actions.changePageURL().type, changeLocationOrigin);
    yield takeEvery(actions.getMovieById().type, getMovieByIdFromUrl);
    yield takeEvery(actions.getMovieByOptions().type, getMovieBySeveralOptionsFromUrl);
    yield takeEvery(actions.getAllSessionsAction().type, getAllMoviesSessionsFromUrl);
    yield takeEvery(actions.getActiveSession().type, getActiveSessionFromUrl);
    yield takeEvery(actions.buyTicketAction().type, buyTicketSaga);
    yield takeEvery(actions.getSessionsByIdAction().type, getMoviesSessionsByIdFromUrl);
}

function* getMovieListFromUrl() {
    const response = yield call(fetch, `https://cinema-api-test.herokuapp.com/movies`);
    const data = yield apply(response, response.json);
    yield put(actions.setAllMovies(data));
}

function* getMovieByIdFromUrl(action) {
    console.log(action.payload);
    const response = yield call(fetch, `https://cinema-api-test.herokuapp.com/movies?movie_id=${action.payload}`);
    const data = yield apply(response, response.json);
    let obj = {0: data};
    yield put(actions.setMovieById(obj));
}

function* getMovieBySeveralOptionsFromUrl(action) {
    const response = yield call(fetch, `https://cinema-api-test.herokuapp.com/movies/find?${action.payload}`);
    const data = yield apply(response, response.json);
    console.log(data);
    yield put(actions.setMovieByOptions(data));
}

function* changeLocationOrigin(action) {
    const {redirect} = action.payload;
    const {history, path} = redirect;
    yield put(actions.changeActiveComponent('AllSessions'));
    yield call(() => history.push(path));
}

function* getAllMoviesSessionsFromUrl() {
    const response = yield call(fetch, `https://cinema-api-test.herokuapp.com/movieShows`);
    const data = yield apply(response, response.json);

    for (let item of data) {
        const res = yield call(fetch, `https://cinema-api-test.herokuapp.com/movies?movie_id=${item['movie_id']}`);
        const movieData = yield apply(res, res.json);
        item['movie_name'] = movieData.name;
        item['movie_img'] = movieData.pictureLink;
    }
    yield put(actions.changeActiveComponent('AllSessions'));
    yield put(actions.setAllSessions(data));
}

function* getMoviesSessionsByIdFromUrl(action) {
    const response = yield call(fetch, `https://cinema-api-test.herokuapp.com/movieShows?movie_id=${action.payload}`);
    const data = yield apply(response, response.json);
    let obj = {0: data};

    const res = yield call(fetch, `https://cinema-api-test.herokuapp.com/movies?movie_id=${action.payload}`);
    const movieData = yield apply(res, res.json);
    obj[0]['movie_name'] = movieData.name;
    obj[0]['movie_img'] = movieData.pictureLink;

    yield put(actions.changeActiveComponent('AllSessions'));
    yield put(actions.setSessionsById(obj));
}

function* getActiveSessionFromUrl(action) {
    yield put(actions.changeActiveComponent('ActiveSession'));
    yield put(actions.setActiveSession(action.payload));
}

function* buyTicketSaga(action) {
    const propsRequest = {
        url: 'https://cinema-api-test.herokuapp.com/bookingPlace',
        method: 'POST',
        body: JSON.stringify(action.payload)
    };
    const response = yield call(sendRequest, propsRequest);
    const resJson = yield apply(response, response.text);
    yield put(actions.setPurchasedTicket(resJson));
    yield put(actions.setTicketAction(null));
}
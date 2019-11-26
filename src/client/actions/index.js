import constants from './../../constants';

export const getAllMovies = payload => ({ type: constants.GET_All_MOVIES, payload });
export const getMovieById = payload => ({ type: constants.GET_MOVIE_BY_ID, payload });
export const setAllMovies = payload => ({ type: constants.SET_All_MOVIES, payload });
export const setMovieById = payload => ({ type: constants.SET_MOVIE_BY_ID, payload });
export const getMovieByOptions = payload => ({ type: constants.GET_MOVIE_BY_OPTIONS, payload });
export const setMovieByOptions = payload => ({ type: constants.SET_MOVIE_BY_OPTIONS, payload });
export const toggleModal = payload => ({ type: constants.TOGGLE_MODAL, payload });
export const changePageURL = payload => ({ type: constants.CHANGE_PAGE_URL, payload });
export const Failure = payload => ({ type: constants.CHANGE_PAGE_URL, payload });
export const getAllSessionsAction = payload => ({ type: constants.GET_ALL_SESSIONS, payload });
export const setAllSessions = payload => ({ type: constants.SET_ALL_SESSIONS, payload });
export const getActiveSession = payload => ({ type: constants.GET_ACTIVE_SESSION, payload });
export const setActiveSession = payload => ({ type: constants.SET_ACTIVE_SESSION, payload });
export const changeActiveComponent = payload => ({ type: constants.CHANGE_ACTIVE_COMPONENT, payload });
export const buyTicketAction = payload => ({ type: constants.BUY_TICKET, payload });
export const setTicketAction = payload => ({ type: constants.SET_TICKET, payload });
export const setPurchasedTicket = payload => ({ type: constants.SET_PURCHASED_TICKET, payload });
export const getSessionsByIdAction = payload => ({ type: constants.GET_SESSION_BY_ID, payload });
export const setSessionsById = payload => ({ type: constants.SET_SESSION_BY_ID, payload });


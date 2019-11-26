import * as constants from '../../constants';

const initialState = {
    MovieList: {},
    SessionList: {},
    ActiveSession: {},
    SelectedTicket: {},
    PurchasedTicket: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SET_All_MOVIES:
            return {
                ...state,
                MovieList: { ...action.payload },
            };
        case constants.SET_MOVIE_BY_ID:
            return {
                ...state,
                MovieList: { ...action.payload },
            };
        case constants.SET_MOVIE_BY_OPTIONS:
            return {
                ...state,
                MovieList: { ...action.payload },
            };
        case constants.SET_ALL_SESSIONS:
            return {
                ...state,
                SessionList: { ...action.payload },
            };
        case constants.SET_ACTIVE_SESSION:
            return {
                ...state,
                ActiveSession: { ...action.payload },
            };
        case constants.SET_TICKET:
            return {
                ...state,
                SelectedTicket: { ...action.payload },
            };
        case constants.SET_PURCHASED_TICKET:
            return {
                ...state,
                PurchasedTicket: `${action.payload}`,
            };
        case constants.SET_SESSION_BY_ID:
            return {
                ...state,
                SessionList: { ...action.payload },
            };
        default:
            return { ...state };
    }
}
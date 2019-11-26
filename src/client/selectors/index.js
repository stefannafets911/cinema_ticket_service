import constants from "../../constants";

export const getMovieListState = state => state.cinema.MovieList;
export const getSessionsList = state => state.cinema.SessionList;
export const getActiveSession = state => state.cinema.ActiveSession;
export const getMainIsModalOpen = state => state.options.isModalOpen;
export const getActiveComponent = state => state.options.ActiveComponent;
export const getSelectedTicket = state => state.cinema.SelectedTicket;
export const getPurchasedTicket = state => state.cinema.PurchasedTicket;

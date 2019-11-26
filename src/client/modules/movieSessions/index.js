import * as actions from '../../actions';
import { connect } from 'react-redux';
import allSessions from './allSessions.jsx';
import * as selectors from '../../selectors';

export const mapStateToProps = state => ({
    getSessionsListState: selectors.getSessionsList(state),
    getActiveSessionState: selectors.getActiveSession(state),
    getActiveComponentState: selectors.getActiveComponent(state),
    getSelectedTicketState: selectors.getSelectedTicket(state),
    getPurchasedTicketState: selectors.getPurchasedTicket(state),
});

export const mapDispatchToProps = dispatch => ({
    getAllSessions: payload => dispatch(actions.getAllSessionsAction(payload)),
    buyTicketAction: payload => dispatch(actions.buyTicketAction(payload)),
    getActiveSession: payload => dispatch(actions.getActiveSession(payload)),
    setTicketAction: payload => dispatch(actions.setTicketAction(payload)),
    getSessionsById: payload => dispatch(actions.getSessionsByIdAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(allSessions);
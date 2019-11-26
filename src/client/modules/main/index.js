import * as actions from '../../actions';
import { connect } from 'react-redux';
import Main from './main.jsx';
import * as selectors from '../../selectors';

export const mapStateToProps = state => ({
    isModalOpen: selectors.getMainIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    toggleModalFunc: payload => dispatch(actions.toggleModal(payload)),
    changeLocationOriginFunc: payload => dispatch(actions.changePageURL(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
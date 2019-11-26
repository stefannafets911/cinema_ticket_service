import * as actions from '../../actions';
import { connect } from 'react-redux';
import Movies from './movies.jsx';
import * as selectors from '../../selectors';

export const mapStateToProps = state => ({
    getMovieListState: selectors.getMovieListState(state),
});

export const mapDispatchToProps = dispatch => ({
    getAllMovies: payload => dispatch(actions.getAllMovies(payload)),
    getMovieById: payload => dispatch(actions.getMovieById(payload)),
    getMovieByOptions: payload => dispatch(actions.getMovieByOptions(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
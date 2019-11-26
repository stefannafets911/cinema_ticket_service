import {Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import Movies from './modules/movies';
import BookTicket from './modules/movieSessions';
import Wrapper from './modules/main';
import history from './utils/browserHistory';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Wrapper>
                        <Route exact path='/' render={() => (
                            <Movies/>)}
                        />
                        <Route exact path='/sessions' render={() => (
                            <BookTicket/>)}
                        />
                    </Wrapper>
                </Switch>
            </Router>
        );
    }
}

export default App;
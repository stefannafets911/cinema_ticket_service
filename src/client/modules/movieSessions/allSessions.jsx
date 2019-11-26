import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SessionItem} from './components/sessionItem';
import {ActiveSession} from './components/activeSession';
import {withRouter} from "react-router";
import {
    Input,
    Header,
    HeaderBlock,
    SearchButton,
    SessionsWrapper,
    SessionsContainer
} from './styledComponent';

export class AllSessions extends PureComponent {
    movieId = React.createRef();

    static propTypes = {
        getAllSessions: PropTypes.func.isRequired,
        buyTicketAction: PropTypes.func.isRequired,
        getActiveSession: PropTypes.func.isRequired,
        setTicketAction: PropTypes.func.isRequired,
        getSessionsById: PropTypes.func.isRequired,
    };

    getAllSessionsFunc = () => {
        this.props.getAllSessions();
    };

    getSessionsByIdFunc = () => {
        const id = this.movieId.current.value;

        if (id){
            this.props.getSessionsById(id);
        }
    };

    getChosenSession = (value) => {
        this.props.getActiveSession(this.props.getSessionsListState[value]);
    };

    buyTicket = (obj) => {
        this.props.buyTicketAction(obj);
    };

    setTicket = (obj) => {
        this.props.setTicketAction(obj);
    };

    render() {
        const {
            buyTicket,
            setTicket,
            getChosenSession,
            getAllSessionsFunc,
            getSessionsByIdFunc
        } = this;

        const {
            getSessionsListState,
            getActiveSessionState,
            getActiveComponentState,
            getSelectedTicketState,
            getPurchasedTicketState,
        } = this.props;

        return (
            <SessionsWrapper>
                <Header>
                    <HeaderBlock>
                        <SearchButton
                            onClick={getAllSessionsFunc}
                        >
                            {`Show all sessions`}
                        </SearchButton>
                    </HeaderBlock>
                    <HeaderBlock>
                        <SearchButton
                            onClick={getSessionsByIdFunc}
                        >
                            {'Show session by movie id'}
                        </SearchButton>
                        <Input
                            type='text'
                            placeholder={`Movie id`}
                            ref={this.movieId}
                        />
                    </HeaderBlock>
                </Header>

                <SessionsContainer>
                    {
                        getActiveComponentState === 'AllSessions' ? (
                            Object.keys(getSessionsListState).map((item, key) =>
                                <SessionItem
                                    key={key}
                                    id_key={key}
                                    movie_id={getSessionsListState[key].movie_id}
                                    startTime={getSessionsListState[key].startTime}
                                    ticketPrice={getSessionsListState[key].ticketPrice}
                                    name={getSessionsListState[key].movie_name}
                                    img={getSessionsListState[key].movie_img}
                                    getOneSessionFunc={getChosenSession}
                                />
                            )
                        ) : null
                    }
                    {
                        getActiveComponentState === 'ActiveSession' ? (
                            <ActiveSession
                                buyTicketFunc={buyTicket}
                                setTicketFunc={setTicket}
                                places={getActiveSessionState['places']}
                                movieShowId={getActiveSessionState['_id']}
                                movieName={getActiveSessionState['movie_name']}
                                startTime={getActiveSessionState['startTime']}
                                getSelectedTicketState={getSelectedTicketState}
                                getPurchasedTicketState={getPurchasedTicketState}
                                ticketPrice={getActiveSessionState['ticketPrice']}
                            />
                        ) : null
                    }
                </SessionsContainer>

            </SessionsWrapper>
        );
    }
}

export default withRouter(AllSessions)
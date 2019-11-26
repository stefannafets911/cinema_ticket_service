import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Seat,
    Block,
    Label,
    Screen,
    TextBlock,
    OrderForm,
    HeaderInfo,
    BuyButton,
    CinemaHall,
    SessionBlock,
    FormTextBlock,
    HeaderTextBlock,
    HeaderMovieName,
    TicketNumber,
} from './styledComponent';

export const ActiveSession = (props) => {
    const getDate = (strDate) => {
        let date = new Date(Date.parse(strDate));

        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`;
    };

    const {
        places,
        movieName,
        startTime,
        movieShowId,
        ticketPrice,
        buyTicketFunc,
        setTicketFunc,
        getSelectedTicketState,
        getPurchasedTicketState,
    } = props;

    const getParamsToBuyTicket = (e) => {
        const el = document.getElementById(e.target.id);
        const params = {
            row_id: el.dataset.rowId,
            movieShow_id: movieShowId,
            isFree: el.dataset.seatFree,
            place_position: el.dataset.seatNumb,
        };

        setTicketFunc(params);
    };

    const BuyTicket = () => {
        buyTicketFunc(getSelectedTicketState)
    };

    return (
        <SessionBlock>
            <HeaderInfo>
                <HeaderMovieName>
                    {movieName}
                </HeaderMovieName>
                <HeaderTextBlock>
                    {`Session start time - ${getDate(startTime)}`}
                </HeaderTextBlock>
                <HeaderTextBlock>
                    {`Ticket price - ${ticketPrice}₴`}
                </HeaderTextBlock>
            </HeaderInfo>
            <CinemaHall>
                <Screen>
                    <TextBlock>
                        {'SCREEN'}
                    </TextBlock>
                </Screen>
                {
                    Object.keys(places).map((item, key1) =>
                        <Row key={key1}>
                            {key1 + 1}
                            {
                                Object.keys(places[item]).map((item2, key2) =>
                                    <Seat key={key2}
                                          id={`${key1}-${key2}`}
                                          isFree={places[item][item2]['isFree']}
                                          data-row-id={key1}
                                          data-seat-numb={key2}
                                          data-seat-free={places[item][item2]['isFree']}
                                          onClick={((e) => getParamsToBuyTicket(e))}
                                    >
                                        {key2 + 1}
                                    </Seat>
                                )
                            }
                        </Row>
                    )
                }
            </CinemaHall>
            <OrderForm>
                <Block>
                    <Label>
                        {'Row - '}
                    </Label>
                    <FormTextBlock>
                        {getSelectedTicketState.row_id ? Number(getSelectedTicketState.row_id) + 1 : ''}
                    </FormTextBlock>
                </Block>
                <Block>
                    <Label>
                        {'Seat - '}
                    </Label>
                    <FormTextBlock>
                        {getSelectedTicketState.place_position ? Number(getSelectedTicketState.place_position) + 1 : ''}
                    </FormTextBlock>
                </Block>
                <BuyButton
                    onClick={BuyTicket}
                >
                    {`BUY TICKET`}
                </BuyButton>
                {
                    getPurchasedTicketState ? (
                        <TicketNumber>
                            {`Your ticket is - ${getPurchasedTicketState}`}
                        </TicketNumber>
                    ) : null
                }
            </OrderForm>
        </SessionBlock>
    );
};

ActiveSession.propTypes = {
    places: PropTypes.array.isRequired,
    movieName: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    movieShowId: PropTypes.string.isRequired,
    ticketPrice: PropTypes.number.isRequired,
    buyTicketFunc: PropTypes.func.isRequired,
    setTicketFunc: PropTypes.func.isRequired,
    getSelectedTicketState: PropTypes.object.isRequired,
    getPurchasedTicketState: PropTypes.string.isRequired,
};
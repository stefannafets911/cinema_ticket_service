import React from 'react';
import PropTypes from 'prop-types';
import {
    Title,
    Image,
    Block,
    TextBlock,
    BuyButton,
    SessionInfo,
    SessionBlock,
    AdditionalInfo
} from './styledComponent';

export const SessionItem = (props) => {
    const {
        img,
        name,
        id_key,
        movie_id,
        startTime,
        ticketPrice,
        getOneSessionFunc,
    } = props;

    const getDetailedSessionInfo = (e) => {
        getOneSessionFunc(e.target.id);
    };

    const getDate = (strDate) => {
        let date = new Date(Date.parse(strDate));

        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`;
    };

    return (
        <SessionBlock>
            <Title>
                {name}
            </Title>
            <SessionInfo>
                <Image
                    src={img}
                />
                <AdditionalInfo>
                    <Block>
                        <TextBlock>
                            {`Session time start - ${getDate(startTime)}`}
                        </TextBlock>
                        <TextBlock>
                            {`Ticket price - ${ticketPrice}₴`}
                        </TextBlock>
                        <TextBlock>
                            {`movie id - ${movie_id}`}
                        </TextBlock>
                    </Block>
                    <BuyButton
                        id={id_key}
                        onClick={((e) => getDetailedSessionInfo(e))}
                    >
                        {`BUY TICKET`}
                    </BuyButton>
                </AdditionalInfo>
            </SessionInfo>
        </SessionBlock>
    );
};

SessionItem.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id_key: PropTypes.number.isRequired,
    movie_id: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    ticketPrice: PropTypes.number.isRequired,
    getOneSessionFunc: PropTypes.func.isRequired,
};
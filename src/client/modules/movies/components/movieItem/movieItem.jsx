import React from 'react';
import PropTypes from 'prop-types';
import {
    Id,
    Title,
    Image,
    TextBlock,
    MovieInfo,
    MovieBlock,
    Description,
    AdditionalInfo,
} from './styledComponent';

export const MovieItem = (props) => {
    const {
        id,
        name,
        image,
        genre,
        description,
        releaseDate,
    } = props;

    const getGenre = (arr) => {
        const textGenre = ['ACTION', 'ADVENTURES', 'COMEDY', 'DRAMA', 'HORROR', 'WESTERNS'];
        let genreString = '';

        arr.map((item) =>
            genreString += `${textGenre[item]} `
        );

        return genreString.toLowerCase();
    };

    const getDate = (strDate) => {
        let date = new Date(Date.parse(strDate));

        return `${date.getFullYear()}-${date.getMonth()}`;
    };

    return (
        <MovieBlock>
            <Id>
                {id}
            </Id>
            <Title>
                {name}
            </Title>
            <MovieInfo>
                <Image
                    src={image}
                />
                <Description>
                    {description}
                </Description>
            </MovieInfo>
            <AdditionalInfo>
                <TextBlock>
                    {`Genre - ${getGenre(genre)}`}
                </TextBlock>
                <TextBlock>
                    {`Release date - ${getDate(releaseDate)}`}
                </TextBlock>
                <TextBlock>
                    {`Movie id - ${id}`}
                </TextBlock>
            </AdditionalInfo>
        </MovieBlock>
    );
};

MovieItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
};
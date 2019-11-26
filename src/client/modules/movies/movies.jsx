import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MovieItem} from './components/movieItem';
import {
    MoviesWrapper,
    SearchButton,
    MoviesContainer,
    Input,
    HeaderBlock,
    Header
} from './styledComponent';
import {withRouter} from "react-router";

export class Movies extends PureComponent {
    static propTypes = {
        getAllMovies: PropTypes.func.isRequired,
        getMovieById: PropTypes.func.isRequired,
        getMovieByOptions: PropTypes.func.isRequired,
    };

    movieId = React.createRef();
    movieGenre = React.createRef();
    movieName = React.createRef();

    getGenre = (str) => {
        let genreString = '';
        let genreArr = str.split(',');
        const textGenre = ['ACTION', 'ADVENTURES', 'COMEDY', 'DRAMA', 'HORROR', 'WESTERNS' ];

        genreArr.map((item) =>
            genreString += `${textGenre.indexOf(item.toUpperCase())},`
        );

        return genreString.slice(0, -1);
    };

    getAllMoviesFunc = () => {
        this.props.getAllMovies();
    };

    getMovieByIdFunc = () => {
        const id = this.movieId.current.value;

        if (id){
            this.props.getMovieById(id);
        }
    };

    getMovieBySeveralOptFunc = () => {
        const name = this.movieName.current.value;
        const genre = this.movieGenre.current.value;
        let urlString = '';

        if (name && genre){
            urlString = `name=${name}&genres=${this.getGenre(genre)}`;
        }else if(genre){
            urlString = `genres=${this.getGenre(genre)}`;
        }else{
            urlString = `name=${name}`;
        }

        if (urlString !== 'name='){
            this.props.getMovieByOptions(urlString);
        }
    };

    render() {
        const {
            getAllMoviesFunc,
            getMovieByIdFunc,
            getMovieBySeveralOptFunc,
        } = this;

        const {
            getMovieListState,
        } = this.props;

        return (
            <MoviesWrapper>
                <Header>
                    <HeaderBlock>
                        <SearchButton
                            onClick={getAllMoviesFunc}
                        >
                            {'Load all movies'}
                        </SearchButton>
                    </HeaderBlock>

                    <HeaderBlock>
                        <SearchButton
                            onClick={getMovieByIdFunc}
                        >
                            {'Load movie by id'}
                        </SearchButton>
                        <Input
                            type='text'
                            placeholder={`Movie id`}
                            ref={this.movieId}
                        />
                    </HeaderBlock>

                    <HeaderBlock>
                        <SearchButton
                            onClick={getMovieBySeveralOptFunc}
                        >
                            {'Load movie in several options '}
                        </SearchButton>
                        <Input
                            type='text'
                            placeholder={`Genre, separate by coma`}
                            ref={this.movieGenre}
                        />
                        <Input
                            type='text'
                            placeholder={`Name`}
                            ref={this.movieName}
                        />
                    </HeaderBlock>
                </Header>
                <MoviesContainer>
                    {
                        Object.keys(getMovieListState).map((item, key) =>
                            <MovieItem
                                key={key}
                                id={getMovieListState[key]._id}
                                name={getMovieListState[key].name}
                                image={getMovieListState[key].pictureLink}
                                description={getMovieListState[key].description}
                                releaseDate={getMovieListState[key].dateOfRelease}
                                genre={getMovieListState[key].genre_id}
                            />
                        )
                    }
                </MoviesContainer>
            </MoviesWrapper>
        );
    }
}

export default withRouter(Movies)
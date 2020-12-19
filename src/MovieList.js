import React, { useContext } from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext';

function MovieList() {

    const [movies] = useContext(MovieContext)

    return (
        <div>
            {
                movies.map(movie => (
                    <Movie movie={movie} key={movie.id} />
                ))
            }
        </div>
    )
}

export default MovieList

import React from 'react'

function Movie({ movie }) {
    return (
        <div className="Movie">
            <p>
                <strong>Movie Name: </strong> {movie.movieName} <br />
                <strong>Movie Price: </strong> ${movie.price} <br />
            </p>
        </div>
    )
}

export default Movie

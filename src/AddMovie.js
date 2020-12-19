import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'
import './AddMovie.css'

function AddMovie() {

    const [movieName, setMovieName] = useState("");
    const [price, setPrice] = useState(0);
    const [movies, setMovies] = useContext(MovieContext);

    console.log(movies);

    const addMovie = (e) => {
        e.preventDefault();

        setMovies(prevMovies => [...prevMovies, {
            movieName: movieName,
            price: price,
        }])

        setName("");
        setMovieName("");
        setPrice("0");
    }

    return (
        <div className="AddMovie">
            <form onSubmit={addMovie}>

                <label>Movie Name</label>
                <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />

                <label>Movie Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

                <button disabled={!movieName}>Submit</button>
            </form>
        </div>
    )
}

export default AddMovie

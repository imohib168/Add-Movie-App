import React, { useContext } from 'react'
import './Nav.css'

import { MovieContext } from './MovieContext';

function Nav() {

    const [movies] = useContext(MovieContext);

    console.log(movies);

    return (
        <div className="Nav">
            {
                movies.lenght === 1 ? (
                    <p>Your profile contains {movies.length} Movie</p>
                ) : (
                        <p>Your profile contains {movies.length} Movies</p>
                    )
            }
        </div>
    )
}

export default Nav

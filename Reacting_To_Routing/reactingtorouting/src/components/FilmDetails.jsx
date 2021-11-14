import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const FilmDetails = () => {

    const { filmid } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(response => response.json())
            .then(film => setFilm(film))
    }, [])


    return (
        <div className="row justify-content-center">
            <div className="card my-2 col-10">
                <div className="card-body">
                    <h3 className="card-title">{film?.title}</h3>
                    <img src={film?.movie_banner} alt="movie poster" className="card-img" />
                    <p>Release date: {film?.release_date}</p>
                    <p>Rotten Tomato Score: {film?.rt_score}</p>
                    <p>{film?.description}</p>
                    <Link to="/films" className="btn btn-outline-secondary btn-sm">Back to films</Link>
                </div>
            </div>
        </div>
    )
}

export default FilmDetails
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FilmList = () => {

    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(response => response.json())
            .then(films => setFilms(films))
    }, [])

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <ul className="list-group">
                    {films.map(film => {
                        return (
                            <li className="list-group-item d-flex justify-content-between" key={film.id}>
                                <div className="row">
                                    <h5 className="">{film.title}</h5>
                                    <p>{film.description.substring(0, 150)+"..."}</p>
                                    <Link to={`/films/${film.id}`} className="text-end">Read more</Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FilmList
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then(response => response.json())
            .then(character => setCharacters(character))
    }, [])

    return (
        <div className="container my-3">
            <div className="row justify-content-center">
                <ul className="list-group">
                    {characters.map(character => {
                        return (
                            <li className="list-group-item text-center d-flex justify-content-between" key={character.id}>
                                {character.name}
                                <Link to={`/characters/${character.id}`}>Read more</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CharacterList
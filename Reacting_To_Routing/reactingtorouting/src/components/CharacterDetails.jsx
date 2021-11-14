import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const CharacterDetails = () => {

    const { characterid } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${characterid}`)
            .then(response => response.json())
            .then(character => setCharacter(character))
    }, [])


    return (
        <div className="row justify-content-center">
            <div className="card my-2 col-10">
                <div className="card-body">
                    <h3 className="card-title">{character?.name}</h3>
                    <p>Age: {character?.age}</p>
                    <p>Gender: {character?.gender}</p>
                    <p>Eye color: {character?.eye_color} </p>
                    <p>Hair color: {character?.hair_color} </p>
                    <p><a href={character?.url} target="_blank" rel="noreffer">API resource link</a></p>
                    <Link to="/characters" className="btn btn-outline-secondary btn-sm">Back to characters</Link>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails
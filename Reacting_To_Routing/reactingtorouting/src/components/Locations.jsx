import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LocationList = () => {

    const [locations, setLocations] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/locations/')
            .then(response => response.json())
            .then(location => setLocations(location))
    }, [])

    return (
        <div className="container my-3">
            <div className="row justify-content-center">
                <ul className="list-group">
                    {locations.map(location => {
                        return (
                            <li className="list-group-item text-center d-flex justify-content-between" key={location.id}>
                                {location.name}
                                <Link to={`/locations/${location.id}`}>Read more</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default LocationList
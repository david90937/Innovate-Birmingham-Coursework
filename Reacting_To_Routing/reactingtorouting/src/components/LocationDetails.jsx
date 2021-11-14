import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const LocationDetails = () => {

    const { locationid } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
            .then(response => response.json())
            .then(location => setLocation(location))
    }, [])


    return (
        <div className="row justify-content-center">
            <div className="card my-2 col-10">
                <div className="card-body">
                    <h3 className="card-title">{location?.name}</h3>
                    <p>Climate: {location?.climate}</p>
                    <p>Terrain: {location?.terrain}</p>
                    <p>Surface water: {location?.surface_water} </p>
                    <p><a href={location?.url} target="_blank" rel="noreffer">API resource link</a></p>
                    <Link to="/locations" className="btn btn-outline-secondary btn-sm">Back to locations</Link>
                </div>
            </div>
        </div>
    )
}

export default LocationDetails
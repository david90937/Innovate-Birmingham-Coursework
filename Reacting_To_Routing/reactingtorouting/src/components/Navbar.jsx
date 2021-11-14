import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {


    return (
        <div className="text-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGmHl63CmbiwbVHab3tFPX-ROXD0N5UvL8Q&usqp=CAU" alt="studio ghibli logo"></img>
        <nav className="d-flex justify-content-evenly mt-2">
            <NavLink to={`/`} className="nav-link" >Home</NavLink>
            <NavLink to={`/films`} className="nav-link">Films</NavLink>
            <NavLink to={`/characters`} className="nav-link">Characters</NavLink>
            <NavLink to={`/locations`} className="nav-link">Locations</NavLink>
        </nav>
        </div>
    )
}

export default Navbar

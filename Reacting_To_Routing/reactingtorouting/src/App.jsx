import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import FilmDetails from './components/FilmDetails'
import FilmList from './components/FilmList'
import CharacterList from './components/CharacterList'
import Navbar from './components/Navbar'
import CharacterDetails from './components/CharacterDetails'
import LocationList from './components/Locations'
import LocationDetails from './components/LocationDetails'


const App = () => {


    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/films">
                    <FilmList></FilmList>
                </Route>
                <Route exact path="/films/:filmid">
                    <FilmDetails></FilmDetails>
                </Route>
                <Route exact path="/characters">
                    <CharacterList></CharacterList>
                </Route>
                <Route exact path="/characters/:characterid">
                    <CharacterDetails></CharacterDetails>
                </Route>
                <Route exact path="/locations">
                    <LocationList></LocationList>
                </Route>
                <Route exact path="/locations/:locationid">
                    <LocationDetails></LocationDetails>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
import React, {useState, useEffect} from 'react';
import Greeter from './components/greeter';

const App = () => {

    const [userName, setUserName] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000)
    })

    if (loaded === false) {
        return (
            <>
                <h1>Website is loading...</h1>
                <button onClick={() => setLoaded(true)}>Finished loading</button>
            </>
        )
    }

    return (
        <>
            <h1> React! </h1>

            <Greeter phrase="Hello there" name="David"></Greeter>
            <Greeter phrase="What's up" name="Polly"></Greeter>
            <Greeter phrase="Ahoy matey" name="Alex"></Greeter>

            <input type="text" value={userName} onChange={ e => setUserName(e.target.value)}/>
            <p>You are logging in as: {userName}</p>
        </>
    )

}

export default App
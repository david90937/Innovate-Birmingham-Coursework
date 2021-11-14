import React, { useState, useEffect } from 'react';
import Chirp from './Chirp';

const ChirpFeed = ({ user, message, handleUserInput, handleUserMessage }) => {
    const [chirpArray, setArray] = useState([]);
    const [counter, setCounter] = useState(0);


    const chirpList = chirpArray.map((val, index) => {
        return <Chirp userName={val.userid} input={val.content} id={val.id} counter={counter} setCounter={setCounter} key={`chirp-${index}`}/>
    });

    useEffect(() => {
        let mounted = true;
        getChirps().then(chirps => {
            if (mounted) {
                setArray(chirps)
            }
            return () => mounted = false;
        })
    }, [counter])

    // useEffect(() => {
    //     getChirps().then(chirps => {
    //         setArray(chirps)
    //     })
    // }, [counter])

    function getChirps() {
        return fetch('/api/chirps').then(response => response.json())
    }

    function sendChirp(chirp: { userid: any; content: string; location: string; }) {
        fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(chirp)
        })
    }

    return (
        <>
            <input type="text" onChange={e => handleUserInput(e.target.value)} placeholder="Username" value={user} />
            <input type="text" onChange={e => handleUserMessage(e.target.value)} placeholder="Message" value={message} />
            <button onClick={() => {
                console.log(chirpArray)
                let chirp = {
                    userid: user,
                    content: message,
                    location: 'birmingham'
                }
                setCounter(counter +1);
                sendChirp(chirp)
                // if (chirpArray.length > 7) {
                //     let arrayCopy = [...chirpArray];
                //     arrayCopy.shift();
                //     setArray([...arrayCopy, { userName: user, input: message }])
                // }
                // else {
                //     setArray([...chirpArray, { userName: user, input: message }]);
                // }
            }}> Send Chirp</button>
            <div className="container">{chirpList}</div>
        </>
    )
}

export default ChirpFeed;
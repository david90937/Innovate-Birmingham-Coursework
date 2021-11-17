import React, { useState, useEffect } from 'react';
import Chirp from './Chirp';
import Mentions from './Mentions';

const ChirpFeed = ({ user, message, handleUserInput, handleUserMessage }) => {
    const [chirpArray, setArray] = useState([]);
    const [counter, setCounter] = useState(0);
    const [mentions, setMentions] = useState([]);

    const handleMentions = (val: React.SetStateAction<any[]>) => setMentions(val);


    const chirpList = chirpArray.map((val, index) => {
        return <Chirp userName={val.userid} input={val.content} id={val.id} counter={counter} setCounter={setCounter} handleMentions={handleMentions} key={`chirp-${index}`} />
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

    async function getChirps() {
        return fetch('/api/chirps').then(response => response.json())
    }

    async function sendChirp(chirp: { userid: any; content: string; location: string; }) {
        if (chirp.content.includes('@')) {
            let words = chirp.content.split(' ')
            let nameIndex = words.findIndex(element => element[0] == '@')
            let userName = words[nameIndex].slice(1, (words.length));
            let getID = await fetch('/api/lastID').then(response => response.json())
            let chirpID = (getID[0].id + 1);
            fetch('/api/mention', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: userName,
                    chirpID: chirpID
                })
            })
        }

        fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(chirp)
        })
        setCounter(counter + 1);
    }

    function handleSendMessage(e) {
        if (e.which === 13 && user != '') {
            let chirp = {
                userid: user,
                content: message,
                location: 'birmingham'
            }
            // if (chirpArray.length > 7) {
            //     let arrayCopy = [...chirpArray];
            //     arrayCopy.shift();
            //     sendChirp(chirp)
            //     setArray([...arrayCopy])
            // }
            // else {
            //     sendChirp(chirp)
            // }
            sendChirp(chirp)
            handleUserMessage('')
        }
        else return;
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <header className="text-center mt-2 mb-5">Welcome to Chirpr! </header>
                </div>
                <div className="row">
                    <div className="col h-100">
                        <div className="intro">
                            <span className="align-text-middle"> To begin chirping, enter your username and the message you want to send below!</span>
                            <span className="align-text-middle"> To see all chirps mentioning a user, click their username.</span>
                        </div>
                        {/* <button onClick={() => {
                            let chirp = {
                                userid: user,
                                content: message,
                                location: 'birmingham'
                            }
                            sendChirp(chirp)
                            // if (chirpArray.length > 7) {
                            //     let arrayCopy = [...chirpArray];
                            //     arrayCopy.shift();
                            //     setArray([...arrayCopy, { userName: user, input: message }])
                            // }
                            // else {
                            //     setArray([...chirpArray, { userName: user, input: message }]);
                            // }
                        }}> Send Chirp</button> */}
                        
                            <Mentions mentions={mentions}></Mentions>
                        
                    </div>
                    <div className="chirp-feed col">
                        {chirpList}
                        <input type="text" onChange={e => handleUserInput(e.target.value)} placeholder="Username" value={user} />
                        <input type="text" onChange={e => handleUserMessage(e.target.value)} onKeyPress={handleSendMessage} placeholder="Message" value={message} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChirpFeed;
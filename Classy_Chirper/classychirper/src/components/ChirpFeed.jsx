import React, { useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import Chirp from './Chirp';

const ChirpFeed = ({ user, message, handleUserInput, handleUserMessage }) => {
    const [chirpArray, setArray] = useState([
        { userName: "Andrew", input: "Thinking about changing careers soon." },
        { userName: "Morgan", input: "Have you ever thought about going into tech?" },
        { userName: "Jace", input: "Innovate Birmingham has a great program for people getting into tech!" }
    ]);

    const chirpList = chirpArray.map((val) => {
        return <Chirp userName={val.userName} input={val.input} key={uuidv4()} />
    });

    return (
        <>
            <input type="text" onChange={e => handleUserInput(e.target.value)} placeholder="Username" value={user}/>
            <input type="text" onChange={e => handleUserMessage(e.target.value)} placeholder="Message" value={message}/>
            <button onClick={() => {
                if (chirpArray.length > 7) {
                    let arrayCopy = [...chirpArray];
                    arrayCopy.shift();
                    setArray([...arrayCopy, {userName: user, input: message}])
                }
                else {
                    setArray([...chirpArray, { userName: user, input: message }]);
                }
            }}> Send Chirp</button>
            <div>{chirpList}</div>
        </>
    )
}

export default ChirpFeed;
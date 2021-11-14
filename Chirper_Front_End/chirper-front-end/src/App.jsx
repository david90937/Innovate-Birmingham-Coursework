import React, { useState } from 'react';
import ChirpFeed from './components/ChirpFeed'

const App = () => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const handleUserInput = val => setUser(val)
    const handleUserMessage = val => setMessage(val)

    return (
        <div className="container">
            <ChirpFeed
                handleUserInput={handleUserInput}
                handleUserMessage={handleUserMessage}
                user={user}
                message={message}
            ></ChirpFeed>
        </div>
    )
}

export default App;
import * as React from 'react';
import { useState, useEffect } from 'react';
import ChirpFeed from './components/ChirpFeed';
import Footer from './components/Footer';


const App = () => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const handleUserInput = (val: React.SetStateAction<string>) => setUser(val)
    const handleUserMessage = (val: React.SetStateAction<string>) => setMessage(val)

    return (
        <div className="container">
            <ChirpFeed
                handleUserInput={handleUserInput}
                handleUserMessage={handleUserMessage}
                user={user}
                message={message}
            ></ChirpFeed>
            <div className="fixed-bottom">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default App;

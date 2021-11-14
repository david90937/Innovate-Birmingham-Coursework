import React from 'react';

const Chirp = ({userName, input}) => {
    return (
        <>
            <p>{userName}</p>
            <p>{input}</p>
        </>
    )
}

export default Chirp;
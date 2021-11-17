import React, { useState } from 'react';
import Chirp from './Chirp';


export async function fetchMentionList(mentionIds) {
    const mentionPromises = mentionIds.map(async (mention: { chirpid: any; }) => {
        const result = await fetch(`/api/chirps/${mention.chirpid}`);
        return await result.json();
    });
    const mentions = await Promise.all(mentionPromises);
    return mentions;
}

export async function getChirpIDs(userName: any) {
    const res = await fetch(`/api/mention/${userName}`);
    const userMentionedChirps = await res.json();
    return userMentionedChirps;
}

const Mentions = ({mentions}) => {
    const [counter, setCounter] = useState(0);
    const handleMentions = (val: React.SetStateAction<any[]>) => console.log(val);
    
    // useEffect(() => {
    //     let mounted = true;
    //     getMentions().then(mentions => {
    //         if (mounted) {
    //             setArray(mentions)
    //         }
    //         return () => mounted = false;
    //     })
    // }, [counter])

    const mentionList = mentions.map((val, index) => {
        return <Chirp userName={val.userid} input={val.content} id={val.id} counter={counter} setCounter={setCounter} handleMentions={handleMentions} key={`mention-${index}`} />
    });

    return (
        <div>
            {mentionList}
        </div>
    );
}

export default Mentions
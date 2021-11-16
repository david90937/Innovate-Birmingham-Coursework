import React, { useState } from 'react';
import Chirp from './Chirp';

// export async function createMentionList(mentionChirps) {
//     let chirpArray = mentionChirps.map(async (chirp) => {
//         let result = await fetch(`/api/chirps/${chirp.chirpid}`).then((res) => res.json())
//         return result
//     });
//     return chirpArray
// }

export async function createMentionList(mentionChirps) {
    let chirpArray = mentionChirps.map(async (chirp) => {
        let result = await fetch(`/api/chirps/${chirp.chirpid}`);
        return await result.json();
    });
    console.log(chirpArray)
    return chirpArray
}

// const resolved = await (chirpArray);
// console.log(resolved)

// let chirpArray = [];
// for (let i = 0; i < mentionChirps.length; i++) {
//     let result = await fetch(`/api/chirps/${mentionChirps[i].chirpid}`);
//     console.log(result);
//     chirpArray.push(result.json());
// }
// let chirpArray = mentionChirps.map(async (chirp) => {
//     let result = await fetch(`/api/chirps/${chirp.chirpid}`)
//     return result   
// })
export async function getChirpIDs(userName: any) {
    const res = await fetch(`/api/mention/${userName}`);
    const userMentionedChirps = await res.json();
    return userMentionedChirps;
}

const Mentions = ({ mentionArray }) => {
    const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     let mounted = true;
    //     getMentions().then(mentions => {
    //         if (mounted) {
    //             setArray(mentions)
    //         }
    //         return () => mounted = false;
    //     })
    // }, [counter])

    const mentionList = mentionArray.map((val, index) => {
        return <Chirp userName={val.userid} input={val.content} id={val.id} counter={counter} setCounter={setCounter} key={`mention-${index}`} />
    });

    return (
        <div>
            {mentionList}
        </div>
    );
}

export default {
    Mentions
}
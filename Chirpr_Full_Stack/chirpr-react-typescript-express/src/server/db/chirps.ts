import { Query } from "./index";

// retrieves all chirps from database
const all = async () => Query('SELECT * FROM chirps');

// retrieves single chirp with given id
const one = async (id: any) => Query('SELECT * FROM chirps WHERE id = ?', [id])

const getID = async() => Query('SELECT MAX(id) as id from chirps');

const createMention = async(userName: any, chirpid: number) => Query('INSERT into mentions(userid, chirpid) values(?, ?)', [userName, chirpid])

const sendMentions = async(userName: any) => Query('SELECT chirpid from mentions WHERE userid = ?', [userName])

const sendChirp = (userid: any, content: string, location: string) => {
    Query('INSERT INTO chirps(userid, content, location) values(?, ?, ?)', [userid, content, location])
};

const updateChirp = (content: any, id: any) => Query('UPDATE chirps set content = ? WHERE id = ?', [content, id]);

const deleteChirp = (id: number) => Query('DELETE from chirps WHERE id = ?', [id])

const deleteMention = (id: number) => Query('DELETE from mentions WHERE chirpid = ?', [id])

export default {
    all,
    one,
    sendChirp,
    updateChirp,
    deleteChirp,
    getID,
    createMention,
    sendMentions,
    deleteMention
}
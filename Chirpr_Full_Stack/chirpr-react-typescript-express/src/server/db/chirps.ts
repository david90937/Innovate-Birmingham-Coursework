import { Query } from "./index";

// retrieves all chirps from database
const all = async () => Query('SELECT * FROM chirps');

// retrieves single chirp with given id
const one = async (id: any) => Query('SELECT * FROM chirps WHERE id = ?', [id])

const sendChirp = (userid: any, content: string, location: string) => Query('INSERT INTO chirps(userid, content, location) values(?, ?, ?)', [userid, content, location]);

const updateChirp = (content: any, id: any) => Query('UPDATE chirps set content = ? WHERE id = ?', [content, id]);

const deleteChirp = (id: number) => Query('DELETE from chirps where id = ?', [id])

export default {
    all,
    one,
    sendChirp,
    updateChirp,
    deleteChirp
}
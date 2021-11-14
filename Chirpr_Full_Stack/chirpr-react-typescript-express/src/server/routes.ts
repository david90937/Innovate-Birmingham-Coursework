import * as express from 'express';

import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World')
});

router.get('/api/chirps', async (req, res) => {
    try {
        res.json(await db.chirps.all());
    }

    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
})

router.get('/api/chirps/:id', async (req, res) => {
    try {
        res.json((await db.chirps.one(req.params.id))[0]);
    }

    catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
});

router.post('/api/chirps', async (req, res) => {
    try {
        const body = req.body;
        await db.chirps.sendChirp(body.userid, body.content, body.location)
        res.sendStatus(200);
    }
    catch(err) {
        if(err) console.log(err);
    }
})

router.put('/api/chirps/', async(req, res) => {
    const body = req.body;
    try {
        await db.chirps.updateChirp(body.content, body.id)
        res.sendStatus(200);
    }
    catch(err) {
        if(err) console.log(err)
    }
})

router.delete('/api/chirps/', async(req, res) => {
    const body = req.body;
    try {
        await db.chirps.deleteChirp(body.id)
        res.sendStatus(200);
    }
    catch(err){
        if(err) console.log(err)
    }
})

export default router;
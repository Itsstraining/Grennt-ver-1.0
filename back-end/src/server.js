const express = require('express');

const app = new express();
const http = require('http').createServer(app);
var admin = require("firebase-admin");
var serviceAccount = require("../key/basic-spotify-firebase-adminsdk-w381f-221002bc4c.json");
app.use(require('body-parser').json());

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://basic-spotify.firebaseio.com"
});

const db = admin.firestore();
const files = db.collection('file');

//ping

app.get('/ping', async (req, res) => {
    res.send(
        { 'message': 'Test Successful !!!!' }
    );
})

app.get('/music', async (req, res) => {
    let listOfmusic = [];
    let listOffiles = await db.collection('file').listDocuments();
    for (const eachmusic of listOffiles) {
        let music = (await eachmusic.get()).data();
        listOfmusic.push(music);
    }
    res.send(listOfmusic);
})

// create music

app.post('/files', async (req, res) => {
    try {
        await db.collection('file').add(req.body);
        res.send({
            status: 'Upload Music Successful !!!!!'
        })
    } catch (e) {
        res.send({
            status: 'Upload fail !!!!!'
        })
    }

})

// delete music

app.delete('/delete', async (req, res) => {
    let _id = req.body.id;
    try {
        await db.collection('file').doc(_id).delete();
        res.send({
            status: 'Delete Successfull !!!!'
        })
    } catch (e) {
        res.send({
            status: 'Delete Fail !!!!!'
        })
    }

})

// put music

app.put('/put/:id', async (req, res) => {
    const { id } = req.params;
    if (id == undefined) {
        res.send({
            status: 'Set the music id'
        });
        return;
    }
    let doc = admin.firestore().collection('file').doc(id);
    if ((await doc.get()).exists) {
        if (id == req.body.id) {
            try {
                await doc.set(req.body);
                res.send({
                    status: 'Update Successfully !!!!!'
                });
                return;
            } catch (e) {
                res.send({
                    status: 'Update Fail !!!!'
                });
            }
        }
        res.send({
            status: 'ID is not match'
        });
        return;
    }
    res.send({
        statut: 'ID is not exist'
    })
})



//port 

http.listen(3000, "127.0.0.1", () => {
    console.log("Sever is running");
})

const express = require("express"); // importing expresss
const fs = require("fs"); // fs for file read operation
const path = require("path");
// creating app object and using json middleware provided by express
const app = express();
app.use(express.json());

// variables for http server connection
const HOST = "localhost";
const PORT = 3000;

// base get route
app.get("/", (req, res) => {
    res.json("AWAMAD LAB Practical 8");
});

app.get('/file/image', function (req, res, next) {
    const options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
    }

    const fileName = 'install_express.png'
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})
app.get('/file/audio', function (req, res, next) {
    const options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
    }

    const fileName = 'rec.mp3'
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})
app.get('/file/pdf', function (req, res, next) {
    const options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
    }

    const fileName = 'file.pdf'
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

// Make server listen on given HOST and PORT
app.listen(PORT, HOST, () => console.log(`Listening on ${HOST}:${PORT}`));

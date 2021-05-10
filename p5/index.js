// importing expresss
const express = require('express');

// creating app object and using json middleware provided by express
const app = express();
app.use(express.json());

// variables for http server connection
const HOST = '192.168.43.240';
const PORT = 3000;

// base get route 
app.get('/', (req, res) => {
    res.send("AWAMAD LAB Practical 5 http server");
})

// Make server listen on given HOST and PORT
app.listen(PORT, HOST, () => console.log(`Listening on ${HOST}:${PORT}`));
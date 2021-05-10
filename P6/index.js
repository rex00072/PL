const express = require("express"); // importing expresss
const fs = require("fs"); // fs for file read operation

// creating app object and using json middleware provided by express
const app = express();
app.use(express.json());

// variables for http server connection
const HOST = "localhost";
const PORT = 3000;

// base get route
app.get("/", (req, res) => {
  res.json("AWAMAD LAB Practical 6 Visit /class to get details");
});

//class route
app.get("/class", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./class.json"));
  const result = {
    message: "Details of class TYCSE",
    data,
  };
  res.send(result);
});

//batch route with param id
app.get("/class/batch/:name", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./class.json"));
  var reqBatch = {};
  data.batches.map((batch) => {
    if (batch.id == req.params.name) reqBatch = batch;
  });
  console.log(reqBatch);
  const result = {
    message: "Following is the batch you were looking for",
    data: reqBatch,
  };
  res.send(result);
});

//pattern matching route
app.get("/*es", (req, res) => {
  res.send("This route will match any route with es at its end");
});

// Make server listen on given HOST and PORT
app.listen(PORT, HOST, () => console.log(`Listening on ${HOST}:${PORT}`));

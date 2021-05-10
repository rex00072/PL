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
  res.json("AWAMAD LAB Practical 7 Visit /class/batch with id to get details");
});
var getBatch = {};
app.get(
  "/class/batch/:id",
  (req, res, next) => {
    const data = JSON.parse(fs.readFileSync("./class.json"));

    data.batches.map((batch) => {
      if (batch.id == req.params.id) getBatch = batch;
    });
    console.log(getBatch);
    next();
  },
  (req, res) => {
    res.json(getBatch);
  }
);
var resultData = [];
app.get(
  "/getfoods",
  (req, res, next) => {
    resultData = JSON.parse(fs.readFileSync("./food.json"));
    console.log("Required data is like this");
    resultData.foods.map((food) =>
      console.log(`ID: ${food.id} Name: ${food.name}`)
    );
    next();
  },
  (req, res) => {
    res.send(resultData.foods);
  }
);
var totalResult = [];
const getBatches = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync("./class.json"));
  data.batches.map((batch) => totalResult.push(batch));
  console.log("Total result array: ");
  console.log(totalResult);
  next();
};
const getFoods = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync("./food.json"));
  data.foods.map((food) => totalResult.push(food));
  console.log("Total result array: ");
  console.log(totalResult);
  next();
};
const sendData = (req, res) => {
  res.send(totalResult);
};
app.get("/gettotal", [getBatches, getFoods, sendData]);

// Make server listen on given HOST and PORT
app.listen(PORT, HOST, () => console.log(`Listening on ${HOST}:${PORT}`));

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mahendra",
});

try {
  connection.connect();
  connection.query("CREATE DATABASE Mahendra");
  console.log("Created AWAMAD");
} catch (error) {
  console.error(error);
}


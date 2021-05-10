const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mahendra",
  database: "awamad",
});

try {
  connection.connect();
  console.log("Connected");
  const statement =
    "CREATE TABLE Team (team_id INT, team_name VARCHAR(50), team_lead VARCHAR(50), team_count INT)";
  connection.query(statement);
  console.log(" Team table created ");
}
catch (e) {
  console.error(e);
}

// connection.connect((err) => {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
//   console.log("Connected!");
//   const statement =
//     "CREATE TABLE Team (team_id INT, team_name VARCHAR(50), team_lead VARCHAR(50), team_count INT)";
//   connection.query(statement, (err, result) => {
//     if (err) throw err;
//     console.log(" Team table created ");
//   });
// });

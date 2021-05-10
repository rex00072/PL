const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2018btecs00033",
  database: "awamad",
});

connection.connect((err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log("Connected!");
  const statement =
    "SELECT team_name, team_lead FROM Team WHERE team_count = 3";
  connection.query(statement, (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    const data = res;
    console.log("- - - - - - - - - - - - - - - - ");
    console.log("|  Team Name  |  Team Count |");
    console.log("- - - - - - - - - - - - - - - - ");
    data.map((row) => {
      console.log(`|  ${row.team_name}  |    ${row.team_lead}   |`);
      console.log("- - - - - - - - - - - - - - -");
    });
  });
});

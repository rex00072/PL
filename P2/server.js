const http = require("http");
const PORT2 = 3000;
const host2 = "localhost";

const serverBody = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<div style='background-color: black; color: white; padding: 10px;'><h1>Mahendra's Server running at " +
    host2 +
    ":" +
    PORT2 +
    "</h1></div>"
  );
};

const server = http.createServer(serverBody);
server.listen(PORT2, host2, () => {
  console.log(`Server listening @ ${host2}:${PORT2}`);
});
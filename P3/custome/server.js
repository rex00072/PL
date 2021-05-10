const http = require("http");
const custome = require("./myModule");
const PORT = 4000;
const host = "localhost";

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.write(custome.getAge(2000));
  res.end();
});

httpServer.listen(PORT, host, () => {
  console.log(`Server listening on ${host}:${PORT}`);
});

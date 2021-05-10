const https = require("https");
const fs = require("fs");
const PORT = 4000;
const host = "127.0.0.1";

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const httpsServer = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("sample.html", (err, data) => {
    if (err) res.write(err);
    else {
      res.write(data);
      res.end();
    }
  });
});

httpsServer.listen(PORT, host, () => {
  console.log(`Server running on ${host}:${PORT}`);
});

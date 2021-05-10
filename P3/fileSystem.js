const fs = require("fs");

fs.readFile("text.txt", (err, data) => {
  if (err) console.log(err);
  else if (data) {
    fs.writeFile("newText.txt", data, (err) => {
      if (err) console.log(err);
      else {
        console.log("Reading data from new file...");
        fs.readFile("newText.txt", (err, data) => {
          if (err) console.log(err);
          else if (data) {
            console.log(data.toString());
            console.log("Renaming file...");
            fs.rename("newText.txt", "duplicate.txt", (err) => {
              if (err) console.log(err);
              else console.log("File renamed");
            });
          }
        });
      }
    });
  }
});

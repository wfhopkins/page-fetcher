const fs = require("fs");
const request = require("request");
const conn = require("./fetcherConnect");

const URL = "http://www.example.edu";
const PATH = "./index.html";

const fetcher = (URL, PATH) => {
  request(URL, (error, response, body) => {
    const fileSize = body.length;
    console.log("URL: ", URL);
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);

    setTimeout(() => {
      fs.writeFile(PATH, body, err => {
        console.log(`Downloaded and saved ${fileSize} bytes to ${PATH}`);
        if (err) {
          console.error(err);
        }
      });
    }, 5000);
  });
};

fetcher(URL, PATH);

module.exports = {fetcher};
//should take a URL and a destination(local)

//should download URL to destination

// should print message to console on completion
//downloaded and saved x bytes to <destination>

const request = require('request');
const fs = require('fs');

let input = process.argv;

request(input[2], (error, response, body) => {
  if (!error) {
    fs.writeFile(input[3], body, (err) => {
      if (err) { throw err };
    });
  }
});
const getFileSize = function (file) {
  let stats = fs.statSync(input[3])
  let fileSizeinBytes = stats["size"]
  return fileSizeinBytes
}
console.log(`Downloaded and saved ${getFileSize(input[3])} bytes to ${input[3]}`)
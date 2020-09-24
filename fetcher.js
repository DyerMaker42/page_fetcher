//should take a URL and a destination(local)

//should download URL to destination

// should print message to console on completion
//downloaded and saved x bytes to <destination>

const request = require('request');
const fs = require('fs');

let input = process.argv;

//console.log(input[2], "URL", input[3], "destination")

request(input[2], (error, response, body) => {
  if (!error) {
    //console.log(response)
    
    fs.writeFile(input[3],body, (err) => {
      //console.log(response)
      if (err) {throw err};
      // if(input[3]){
      //   throw err
      // }
      console.log("the file has been updated")
    });
    let bytes;// returns an object called stats, with key of size
    //return console.log(`Downloaded and saved ${bytes.size} bytes to ${input[3]}`);
  }

})
const getFileSize = function(file) {
  let stats = fs.statSync(input[3])
  let fileSizeinBytes = stats["size"]
  return fileSizeinBytes
}
console.log(`Downloaded and saved ${getFileSize(input[3])} bytes to ${input[3]}`)
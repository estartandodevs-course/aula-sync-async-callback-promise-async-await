const fs = require("fs");

fs.readFile("./file1.txt", function (err, data1) {
  fs.readFile("./file2.txt", function (err, data2) {
    fs.readFile("./file3.txt", function (err, data3) {
      console.log(`${data1}`);
      console.log(`${data2}`);
      console.log(`${data3}`);
    });
  });
});

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function (err, data) {
      resolve(`${data}`);
    });
  });
};

readFile("file1.txt")
  .then((data) => {
    console.log(data);
    return readFile("file2.txt");
  })
  .then((data) => {
    console.log(data);
    return readFile("file3.txt");
  })
  .then((data) => {
    console.log(data);
  });

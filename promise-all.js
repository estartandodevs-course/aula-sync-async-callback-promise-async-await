const fs = require("fs");

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function (err, data) {
      resolve(`${data}`);
    });
  });
};

// const all = [1, 2, 3].map((value) => readFile(`file${value}.txt`));

const promise1 = readFile("file1.txt");
const promise2 = readFile("file2.txt");
const promise3 = readFile("file3.txt");

const all = [promise1, promise2, promise3];

Promise.all(all).then((res) => {
  console.log("Todas as promessas", res);
});

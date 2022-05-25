const fs = require("fs");

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, function (err, data) {
      resolve(`${data}`);
    });
  });
};

async function executa() {
  const result1 = await readFile("file1.txt");
  const result2 = await readFile("file2.txt");
  const result3 = await readFile("file3.txt");

  console.log(result1);
  console.log(result2);
  console.log(result3);
}

executa();

async function executaComPromiseAll() {
  const result1 = readFile("file1.txt");
  const result2 = readFile("file2.txt");
  const result3 = readFile("file3.txt");
  const all = [result1, result2, result3];

  await Promise.all(all).then((res) => {
    console.log("Todas as promessas", res);
  });
}

executaComPromiseAll();

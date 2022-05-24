const axios = require("axios");

const URL = "https://viacep.com.br/ws";

const getCepWithPromise = (cep) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL}/${cep}/json/`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

getCepWithPromise("28911270")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

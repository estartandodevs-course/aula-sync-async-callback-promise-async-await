const axios = require("axios");

const URL = "https://viacep.com.br/ws";

const getCepWithCallback = (cep, callback) => {
  axios.get(`${URL}/${cep}/json/`).then((res) => {
    callback(null, res.data);
  });
};

const callback = (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("address", result);
  }
};

getCepWithCallback("28911270", callback);

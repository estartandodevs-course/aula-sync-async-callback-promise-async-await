const axios = require("axios");

const URL = "https://viacep.com.br/ws";

const getCep = async (cep) => {
  try {
    const result = await axios.get(`${URL}/${cep}/json/`);
    console.log("result", result.data);
  } catch (error) {
    console.log("ocorreu um erro");
  }
};

getCep("28911270");

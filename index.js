// Sync

const calculaTotalCarrinhoDeComprasSync = (total) => {
  const taxaDeEntrega = 50; //

  return total + taxaDeEntrega;
};

const totalSync = calculaTotalCarrinhoDeComprasSync(100);

console.log("totalSync", totalSync);

// ASync

const calculaTotalCarrinhoDeComprasAsync = (total, callback) => {
  setTimeout(() => {
    const taxaDeEntrega = 50;
    const result = total + taxaDeEntrega;

    if (result === 150) {
      callback("Ocorreu um erro");
    } else {
      callback(null, result);
    }
  }, 0);
};

const callback = (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("totalASync", result);
  }
};

calculaTotalCarrinhoDeComprasAsync(100, callback);

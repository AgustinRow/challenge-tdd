const corchetesBalanceados = (str) => {
  var strCounter = 0;
  var strIndex = 0;
  if (str[strIndex] === "") {
    return true;
  } else {
    if (str.length % 2 == 0) {
      while (strIndex < str.length) {
        if (str[strIndex] === "[") {
          strCounter++;
          strIndex++;
        } else {
          if (strCounter > 0) {
            strCounter--;
            strIndex++;
          } else {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }
};

QUnit.test("Corchetes balanceados unit testing", (assert) => {
  // string vacio
  assert.deepEqual(corchetesBalanceados(""), true);
  // corchete simple balanceado
  assert.deepEqual(corchetesBalanceados("[]"), true);
  // Doble corchete balanceado
  assert.deepEqual(corchetesBalanceados("[][]"), true);
  // Con corchete balanceado en el medio
  assert.deepEqual(corchetesBalanceados("[[]]"), true);
  // Con mas de  un corchete balanceado en el medio
  assert.deepEqual(corchetesBalanceados("[[[][]]]"), true);
  // Comienza corchete abierto
  assert.deepEqual(corchetesBalanceados("]["), false);
  // Comienza con corchete abierto y longitud mayor a 2
  assert.deepEqual(corchetesBalanceados("][]["), false);
  // Cantidad corchetes impares
  assert.deepEqual(corchetesBalanceados("[[]]]"), false);
  // Finaliza con corchete abierto
  assert.deepEqual(corchetesBalanceados("[][]]["), false);
});

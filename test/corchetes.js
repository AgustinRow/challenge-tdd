const corchetesBalanceados = (str) => {
  return esPar(str) && esBalanceado(str);
};
function esVacio(str) {
  console.log(str[0]);
  return str[0] == "";
}
function esPar(str) {
  return str.length % 2 == 0;
}

function esBalanceado(str) {
  var index = 0;
  var count = 0;
  while (!llegoAlFinal(str, index)) {
    if (str[index] === "[") {
      count++;
    } else {
      if (count > 0) {
        count--;
      } else {
        return false;
      }
    }
    index++;
  }
  return true;
}

function llegoAlFinal(str, index) {
  return index >= str.length;
}

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

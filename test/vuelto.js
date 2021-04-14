const cambio = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const cambioDevuelto = (numero, unidades) => {
  let resto = [];
  if (unidades != 0) {
    numero = numero * Math.pow(10, unidades);
  }
  while (numero > 0) {
    const resultado = cambio.find((element) => element <= numero);
    resto.unshift(resultado);
    numero = numero - resultado;
  }
  return resto.reverse();
};
const esPagoExacto = (vuelto) => {
  return vuelto == 0;
};

const vueltoConDenominacionArgentina = (vuelto) => {
  var res = [];
  let count = 0;
  while (vuelto > 0) {
    const ultimoDigito = vuelto % 10;
    if (ultimoDigito != 0) {
      res.unshift(cambioDevuelto(ultimoDigito, count));
    }
    vuelto = Math.floor(vuelto / 10);
    count++;
  }
  return res.flat(1);
};

const calcularVuelto = (pago, importe) => {
  let vuelto = pago - importe;
  if (esPagoExacto(vuelto)) {
    return [0];
  } else {
    return vueltoConDenominacionArgentina(vuelto);
  }
};

QUnit.test("testear el vuelto", (assert) => {
  // Vuelto justo
  assert.deepEqual(calcularVuelto(100, 100), [0]);
  //
  assert.deepEqual(calcularVuelto(100, 75), [20, 5]);
  //
  assert.deepEqual(calcularVuelto(200, 75), [100, 20, 5]);
  //
  assert.deepEqual(calcularVuelto(1000, 442), [500, 50, 5, 2, 1]);
  //
  assert.deepEqual(calcularVuelto(500, 50), [200, 200, 50]);
  //
  assert.deepEqual(calcularVuelto(1889, 1), [
    1000,
    500,
    200,
    100,
    50,
    20,
    10,
    5,
    2,
    1,
  ]);
});

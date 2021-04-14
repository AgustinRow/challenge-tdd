# TDD challenge

Ejercicio de TDD del challenge propuesto por Mikroways

## Herramientas

Los test fueron implementados con el lenguaje Javascript utilizando un modulo
de node llamado QUnit.

## Test

- Corchetes balanceados(`/test/corchetes.js`): función que testea el método `corchetesBalanceados(str)` y devuelve si el string ingresado es un corchete balanceado o no. Este test determina si para 1 input de tipo string(cuyos caracteres son sí o sí "[" o "]"), su output es un booleano cuyo valor depende de si el string ingresado son corchetes balanceados o no.

- Calculadora de vuelto(`test/vuelto.js`): función que testea el método `calcularVuelto (pago, importe)` que simula el calculo de un vuelto. Éste test determina si para 2 inputs de tipo entero, su output es una arreglo de numeros enteros, cuyos valores se corresponde al resultado `pago-importe` expresado en la siguiente denominacion `[1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]`

## Para correr los Test

- Settings:

`npm install`

- Run:

`npm run test`

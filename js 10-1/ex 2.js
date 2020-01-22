const assert = require('assert');

function myIndexOf(arr, item) {
  return arr.findIndex((element) => element === item);
}

assert.strictEqual(myIndexOf([1,2,3,4], 3), 2);
assert.strictEqual(myIndexOf([1,2,3,4], 5), -1);
// implemente seus testes aqui
// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
const assert = require('assert');

function myRemove(arr, item) {
  return arr.filter((elem) => elem !== item);
}

const expected = [1,2,4];
assert.deepEqual(myRemove([1,2,3,4],3), expected);
const expected2 = [1,2,3,4];
assert.notDeepEqual(myRemove(expected2, 3), expected2);
assert.deepEqual(myRemove(expected2), expected2);
assert.strictEqual(myRemove(expected2,0).length, expected2.length);
assert.deepEqual(myRemove(expected2,5), expected2 )

// implemente seus testes aqui
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique que o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
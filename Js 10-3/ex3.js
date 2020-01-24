function mySum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}
module.exports = mySum;
// implemente seus testes aqui
// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
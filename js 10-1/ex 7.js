const assert = require('assert');
const teste = 0;
assert.notStrictEqual(teste, undefined)
function teste1(num1, num2){
    if(num1>num2) return true;
    return false;
}
assert.strictEqual(typeof(teste1), 'function');
assert.ok( 5 > 1, '1 não é maior que 5');
const obj1= {
    a: 1,
    b:2,
}
const obj2 = {
    a: 1,
    b: 2,
}
assert.ok( JSON.stringify(obj1) === JSON.stringify(obj2) , 'Não sao iguais')
assert.ok( teste1(5,1), 'Não são iguais')
// Teste se uma variável foi definida

// Teste se uma função foi definida

// Utilize assert.ok() para testar uma condição

// Compare dois objetos (JSON) para verificar se são idênticos ou não

// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
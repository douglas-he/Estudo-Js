const sum = require('../ex1');
const myIndexOf = require('../ex2');
const mySum = require('../ex3');
const myRemove = require('../ex4');
const myRemoveWithoutCopy = require('../ex5');
const myFizzBuzz = require('../ex6')

test(' Sum a+b ', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'));
});

test(' Procura o indice do elemento', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
});

test('Soma os elementos do Array', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
    expect(mySum([1, -2, -3, 4])).toBe(0);
})

test('Retorna um Array Sem o Elemento', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

test('Retorna o Prorio Array sem um elemento', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

test('FizzBuzz!', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(3)).toEqual('fizz');
})
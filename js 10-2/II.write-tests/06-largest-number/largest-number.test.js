var largestNumber= require("./largest-number");
const assert = require('assert');
test('Não é o maior numnero', function(){
    const results = largestNumber([3, 21, 88, 4, 36])
    assert.strictEqual(results, 88);
})
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

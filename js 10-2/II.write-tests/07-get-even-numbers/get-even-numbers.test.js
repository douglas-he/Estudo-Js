
var largestNumber= require("./get-even-numbers");
const assert = require('assert');
test('Largest Number', function(){
    const results = largestNumber([22, 13, 73, 82, 4]);
    assert.deepEqual(results, [22, 82, 4]);
})
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

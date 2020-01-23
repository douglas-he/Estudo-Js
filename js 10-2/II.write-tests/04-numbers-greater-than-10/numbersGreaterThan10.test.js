var largerThanTen = require("./numbersGreaterThan10");
const assert = require('assert');
test("Get numbers greater than 10", function() {
    const result = largerThanTen([4, 10, 32, 9, 21]);
    assert.deepEqual( result, [32, 21]);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];

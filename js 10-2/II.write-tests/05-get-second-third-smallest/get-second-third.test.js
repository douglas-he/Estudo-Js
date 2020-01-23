
test("Get numbers greater than 10",function() {
   const result = secondThird([90, 5, 11, 8, 6]);
   assert.deepEqual(result,[6, 8])

});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

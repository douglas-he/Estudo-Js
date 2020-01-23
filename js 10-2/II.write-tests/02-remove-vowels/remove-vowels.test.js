var removeVowels = require("./remove-vowels");
const assert = require('assert');
test("remove vowels from word", function() {
  var result = removeVowels('samuel')
  assert.strictEqual(result,'_a_ue_')
});

var removeVowelsForWords = require("./remove-vowels-in-array");
const assert = require('assert');
test("remove vowels from all words in array", function() {
  const result = removeVowelsForWords(["Irina", "Etza", "Daniel"]);
  assert.deepEqual (result, ["__i_a", "___a", "_a_ie_"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
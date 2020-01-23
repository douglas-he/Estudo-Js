var greetPeople = require("./greet-people");
const assert = require('assert');
test("print list of names prefixed with Hello", function() {
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors);
  const expected = 'Hello IrinaAshleighEtza';
  assert(expected == result,"print list of names prefixed with Hello" );
});

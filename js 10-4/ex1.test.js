const uppercase = require("./ex1");
test('callback function', done => {
    uppercase('a',result => {
    expect(result).toBe('A')
    done();
    })
})
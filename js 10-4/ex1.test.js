const uppercase = require("./ex1");

const callback = jest.fn();

test('callback function', ()=>{
    uppercase('a',callback);
    expect(callback).toHaveBeenCalledWith('A');
})
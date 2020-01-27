const getUserName = require("./ex2");
test('Promise return', () => {
    return getUserName(1)
    .then((result) => expect(result).toEqual('Mark'))
    .catch((erro)=> expect(erro).toEqual({ error: 'User with 1 not found.' }))
})
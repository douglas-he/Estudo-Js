x = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Jusciscreide', 'Joana'];

function retorna(array) {
    let result = 0,
        nome;
    for (let i = 0; i < array.length; i++) {
        if (array[result].length < array[i].length) {
            result = i;
            nome = array[i];
        }
    }
    return nome;
}
console.log(retorna(x));
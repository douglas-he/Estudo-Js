x = [2, 5, 3, 5, 5, 2, 3]

function retorna(array) {
    let array2 = array,
        contador = 0,
        contador2 = 0,
        position = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                contador += 1;
            }
        }
        if (contador > contador2) {
            position = i;
            contador2 = contador;
        }
        contador = 0

    }
    return array[position];
}
console.log(retorna(x));
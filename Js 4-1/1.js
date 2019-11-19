let a = 150,
    b = 10,
    c = 20;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
}
if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}
if (a > 0) {
    console.log("positive");
} else if (a < 0) {
    console.log("negative");
}
if (a + b + c == 180) {
    console.log(true);
} else {
    console.log(false);
}
let str = "dAma"
str = str.toLowerCase();
console.log(str);
switch (str) {
    case 'cavalo':
        console.log('Movimentos em Formato de L')
        break;
    case 'bispo':
        console.log('Movimentos na diagonal')
        break;
    case 'peão':
        console.log('Movimentos apenas para frente, apenas uma casa')
        break;
    case 'rei':
        console.log('Todos os lados, apenas uma casa')
        break;
    case 'dama':
        console.log('todas as direções')
        break
    case 'torre':
        console.log('horizontal e vertical')
        break;
    default:
        console.log('Peça Invalida')
}
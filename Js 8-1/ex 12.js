const LONGESTWORD = (string) => {
    const arrayStr = string.split(" ");
    let maior = 0;
    let palavra = null;
    arrayStr.forEach((str) => {
        if (maior < str.length) {
            maior = str.length;
            palavra = str;
        }
    });
    return palavra;
}
console.log(LONGESTWORD("Antônio foi no banheiro e não sabemos o que aconteceu"))

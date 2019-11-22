function verifica(word, ending) {
    let cont = ending.length;
    word = word.slice(-cont);
    if (word == ending) {
        return true
    }
    return false;
}
let word = 'Trybe',
    ending = 'be';
console.log(verifica(word, ending))
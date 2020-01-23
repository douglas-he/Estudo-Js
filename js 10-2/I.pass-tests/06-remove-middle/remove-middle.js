function removeMiddle(words){
    const a =((words.length)/2)-0.5;
    const palavra = [words[a]];
    words = words.splice(a,a-1);
    return palavra;
}
module.exports = removeMiddle;
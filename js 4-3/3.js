x = [2, 3, 6, 7, 10, 1]

function retorna(pipoca) {
    let result = 0;
    for (let i = 1; pipoca[i] != undefined; i++)
        if (Math.min(pipoca[result], pipoca[i]) == pipoca[i]) result = i;
    return result;
}
console.log(retorna(x));
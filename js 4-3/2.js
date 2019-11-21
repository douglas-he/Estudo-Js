x = [150, 123, 100, 115, 44, 88]

function retorna(pipoca) {
    let result = 0;
    for (let i = 1; pipoca[i] != undefined; i++)
        if (Math.max(pipoca[result], pipoca[i]) == pipoca[i]) result = i;
    return result;
}
console.log(retorna(x));
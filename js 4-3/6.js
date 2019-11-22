function adiciona(n) {
    let sum;

    if (n == 0)
        return 0;
    else
        sum = n + adiciona(n - 1);

    return sum;

}
console.log(adiciona(6))
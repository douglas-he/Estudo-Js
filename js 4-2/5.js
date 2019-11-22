let n = 6,
    j = 0;
for (let i = 1; i <= n; i++) {
    if ((n % i) == 0) {
        j += 1;
    }
}
if (j == 2) {
    console.log('numero primo')
} else {
    console.log('não é primo')
}
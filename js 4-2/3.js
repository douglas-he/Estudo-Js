let n = 5,
    j = ' ',
    o = '*';
for (let i = 0; i < n - 2; i++) {
    j += ' ';
}
for (let i = 0; i < n; i++) {
    console.log(j + o);
    o += '*';
    j = j.substr(1);
}
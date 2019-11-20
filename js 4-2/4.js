let n = 8,
    j = ' ',
    o = '*'
x = n / 2;
if (n % 2 != 0) {
    for (let i = 0; i < (x - 1.5); i++) {
        j += ' ';
    }
    for (let i = 0; i < n; i++) {

        console.log(j + o + j);
        o += '**';
        if (!j) {
            break;
        }
        j = j.substr(1);


    }
} else {
    o = '**';
    for (let i = 0; i < (x - 1.5); i++) {
        j += ' ';
    }
    for (let i = 0; i < n; i++) {

        console.log(j + o + j);
        o += '**';

        j = j.substr(1);
        if (!j) {
            break;
        }
    }
}
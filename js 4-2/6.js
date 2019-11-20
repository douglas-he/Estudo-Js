let string, romano = 'XD';
romano = romano.toUpperCase()
string = romano.split("");

for (let cont = 0; string[cont]; cont++) {
    switch (string[cont]) {
        case 'I':
            string[cont] = 1;
            break;
        case 'V':
            string[cont] = 5;
            break;
        case 'X':
            string[cont] = 10;
            break;
        case 'L':
            string[cont] = 50;
            break;
        case 'C':
            string[cont] = 100;
            break;
        case 'D':
            string[cont] = 500;
            break;
        case 'M':
            string[cont] = 1000;
            break;
    }
}
if (string[1] == undefined) {
    console.log(string[0]);
} else if (string[0] > string[1]) {
    let a = string[0];
    for (let cont = 1; string[cont] != undefined; cont++) {
        a += string[cont];
    }
    console.log(a);
} else if (string[0] < string[1]) {
    let a = string[0];
    for (let cont = 1; string[cont]; cont++) {
        a = string[cont] - a;
    }
    console.log(a);
} else if (string[0] == string[1]) {
    let sub = 0;
    let b = 0;
    for (let cont = 1; string[cont] == string[cont - 1]; cont++) {
        sub += string[cont - 1];
        if (string[cont] != string[cont + 1]) {
            b = string[cont + 1];
            sub += string[cont];
        }
    }
    console.log(b - sub);
}
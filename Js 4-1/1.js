let a = 3,
    b = 2,
    c = 1;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
}
if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}
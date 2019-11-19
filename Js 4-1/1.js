let a = 150,
    b = 10,
    c = 20;
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
if (a > 0) {
    console.log("positive");
} else if (a < 0) {
    console.log("negative");
}
if (a + b + c == 180) {
    console.log(true)
} else
    console.log(false)
}
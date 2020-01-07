const fat = (num) => (num > 1) ? num*fat(num-1) : 1;
console.log(fat(6));
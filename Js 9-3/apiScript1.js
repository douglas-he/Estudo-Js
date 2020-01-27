const promess = () => { return new Promise((resolve, reject) => {
    const arr = [];
    for(let i= 0 ; i < 10 ; i++) { arr[i]= Math.round((Math.pow(Math.random() * 50,2)))};
    const compara = arr.reduce((arr,acumulator) => arr+= acumulator,0);
    if (compara > 8000) {
        resolve([Math.round(compara/2), Math.round(compara/3), Math.round(compara/5), Math.round(compara/10)]);
    }
    reject();
})}
const promessSoma = (arr) => arr.reduce((curr, acc) => curr+=acc, 0);
promess()
.then((variavel) => { console.log(variavel); 
    console.log(promessSoma(variavel))
})
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))

// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela você deve produzir um array com dez números aleatórios de 1 a 50, elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

// Tente usar Higher Order Functions! Lembre-se que tanto uma quanto a outra recebem, como parâmetro, funções!
// Quando a promise for resolvida com sucesso retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

// Quando a Promise for rejeitada imprima, via console.log, a frase “É mais de oito mil! Essa promise deve estar quebrada!”

// Quando a Promise for bem sucedida encadeie nela uma segunda Promise que some os elementos do array.
const promess = () => { return new Promise((resolve, reject) => {
    const arr = [];
    for(let i= 0 ; i < 10 ; i++) { arr[i]= Math.round((Math.pow(Math.random() * 50,2)))};
    const compara = arr.reduce((arr,acumulator) => arr+= acumulator,0);
    if (compara > 8000) {
        resolve();
    }
    reject();
})}
    
promess()
.then(() => console.log('resolved'))
.catch(() => console.log('no resolved'))
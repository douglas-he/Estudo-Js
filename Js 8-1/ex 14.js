const stringPrincial = 'Tryber x aqui! Tudo bem?';
const stringName = 'Douglas';
function alteraX ( string1, string2 ){
    const principalCortarda = string1.split("x");
    console.log(`${principalCortarda[0]} ${string2} 
${principalCortarda[1]}`);
}
alteraX(stringPrincial, stringName);
const API_URL = "https://icanhazdadjoke.com/search?term=hipster";

const fetchJoke = () => {
    fetch(API_URL)
    .then(queijinho => {
        queijinho.json()
        .then(vaquinha => {
            console.log(vaquinha);
            document.getElementById('jokeContainer').innerHTML = vaquinha.results[0].joke;
         })
         .catch(() => console.log('sem Piada'))
    })
  .catch(()=> console.log('error'))
}   
window.onload = () => fetchJoke()

// Você deve criar uma listagem de produtos que devem ser consultados através da API do Mercado Livre.

// Você deve utilizar o endpoint:

// "https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
// onde $QUERY deve ser o valor da sua busca.

// O retorno desse endpoint será algo no formato json. Por exemplo, se for pesquisado "computador":
// A lista de produtos que devem ser exibidos é o array results no JSON acima.

// Você deve utilizar a função createProductItemElement(product) para criar os componentes HTML referentes a um produto.

// Adicione o elemento retornado da função createProductItemElement(product) como filho do elemento <section class="items">.

// Obs: sku se referem as id
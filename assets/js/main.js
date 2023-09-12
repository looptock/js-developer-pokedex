
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;



function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}">
          <div class="face front">
              <div class="informacoes">
                  <span class="name">${pokemon.name}</span>
                  <span class="number">#${pokemon.number}</span>
              </div>
              <img src="${pokemon.photo}"
                  alt="${pokemon.name}"
                  class="gif">
              
              <div class="detail">
                  <ol class="types">
                      ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  </ol>                
              </div>
          </div>
          <div class="face back">
              <div class="descricao">
                <h3>HP</h3>
                <span>${pokemon.hp}</span>
                <h3>Attack</h3>
                <span>${pokemon.attack}</span>
                <h3>Defesa</h3>
                <span>${pokemon.defense}</span>
                <h3>Velocidade</h3>
                <span>${pokemon.speed}</span>
              </div>
          </div>
      </li>
  `
}



function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./assets/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./assets/imagens/moon.png");
    }
});

const cartoesPokemon = document.querySelectorAll(".cartao-pokemon");

cartoesPokemon.forEach((cartao) => {
    cartao.addEventListener("click", () => {
        cartao.classList.toggle("virado");
    });
});
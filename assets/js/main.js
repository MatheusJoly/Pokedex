const loadMoreButton = document.getElementById("loadMoreButton")
const pokemonList = document.getElementById('pokemonList')
const limit = 5
let offset = 0


  
const listItems = {}

function loadPokemonItems(offset, limit) {
    function convertPokemonToLi(pokemon){
        return `
        <li class="pokemon ${pokemon.type}">
                    <span class="number">${pokemon.number}</span>
    
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                        </ol>
                    
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                </li>`
    }
    pokeApi.getPokemons(offset, limit).then((pokemons = {}) => {

    const newList = pokemons.map((pokemon) => {
     return  convertPokemonToLi(pokemon)
        
    })
    
    const newHtml = newList.join('')
    
    pokemonList.innerHTML += newHtml
})
}
loadPokemonItems(offset, limit)
loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
})
/*
           for(let i = 0 ; i < pokemons.length; i++){
            const pokemon = pokemons[i]
            listItems.push(convertPokemonToLi(pokemon))
           }
           }
    )
*/  

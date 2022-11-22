const poke_container = document.getElementById('poke_container')
const pokemon_count = 150
const color = {
     fire: 'red',
     grass: 'green'
}

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}
const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/$(id)'
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

const id = pokemon.id.toString().padStart(3, '0')

const poke_types = pokemon.types.map(type => type.type.name )

const main_types = object.keys(colors)
const type = main_types.find(type => poke_container.types.idexOf (type) > -1)
const color = colors[type]

pokemon.style.backgroundColor = color


const createPokemonCard = (pokemon) => {
      const pokemonEl = doucment.createElement('div')
      pokemonEl.classlist.add('pokemon')
}
     const pokemonInnerHTML = `
      <div class="img_container">
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="ლინკი">
      </div>
      <div class="info">
            <span class="number">${pokemon.id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">type: <span>${type}</span></small>
      </div>
     `
      pokemonEl.innerHTML = pokemonInnerHTML

     poke_container.appendChild(pokemonEl)
fetchPokemons()




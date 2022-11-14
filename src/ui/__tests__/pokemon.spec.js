import mostrarPokemon from '../pokemon';
import bulbasaurFixture from './bulbasaur.json';
import pokedexFixture from './pokedex.fixture';


describe('Pruebas en pokemon.js, en funcion mostrarPokemon', () =>{
    document.body.innerHTML = pokedexFixture;

    test('Probar que se muestre pokemon bulbasaur', () =>{
        mostrarPokemon(bulbasaurFixture);
        const $imagen = document.querySelector('#pokemon-imagen');
        const $nombre = document.querySelector('#pokemon-nombre');
        const $id = document.querySelector('#pokemon-id');
        expect($imagen.src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
        expect($imagen.alt).toBe('Imagen frontal del pokemon bulbasaur');
        expect($nombre.textContent).toBe('bulbasaur');
        expect($id.textContent).toBe('1');

    });

});
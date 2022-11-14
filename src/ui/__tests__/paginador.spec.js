/// <reference types='Jest' />

import mostrarPaginador, {manejarCambioPagina} from '../paginador';
import pokedexFixture from './pokedex.fixture';


describe('Pruebas en paginador, funcion manejarCambioPagina', () => { 

    document.body.innerHTML = pokedexFixture;
    const callbackPaginaSeleccionada = jest.fn();

    test('Probar que callbackPaginaSeleccionada sea llamada', () => { 
        
        document.querySelector('#paginador').onclick = e => {
            manejarCambioPagina(e, callbackPaginaSeleccionada);
        };
        document.querySelector('#paginador').click();
        expect(callbackPaginaSeleccionada).toHaveBeenCalled();
    });

    test('Probar que callbackPaginaSeleccionada sea llamada con un numero', () => { 

        document.querySelector('#paginador').onclick = e => {
            manejarCambioPagina(e, callbackPaginaSeleccionada);
        }
        document.querySelector('[data-pagina="3"]').click();
        expect(callbackPaginaSeleccionada).toHaveBeenCalledWith(3);
    });

    test('Probar que callbackPaginaSeleccionada sea llamada con el boton siguiente' , () => {
        document.querySelector('#paginador').onclick = e => {
            manejarCambioPagina(e, callbackPaginaSeleccionada);
        }
        document.querySelector('[data-pagina="Siguiente"]').click();
        expect(callbackPaginaSeleccionada).toHaveBeenCalledWith('pagina-siguiente');
        
    });

    test('Probar que callbackPaginaSeleccionada sea llamada con el boton anterior' , () => {
        document.querySelector('#paginador').onclick = e => {
            manejarCambioPagina(e, callbackPaginaSeleccionada);
        }
        document.querySelector('[data-pagina="Anterior"]').click();
        expect(callbackPaginaSeleccionada).toHaveBeenCalledWith('pagina-anterior');
        
    });
});

describe('Pruebas en paginador, funcion mostrarPaginador', () => { 

    document.body.innerHTML = pokedexFixture;

    const testTotalPokemones = 100;
    const testPaginaActual = 2;
    const testUrlSiguiente = 'https://test-pagina-siguiente';
    const testUrlAnterior = 'https://test-pagina-anterior';
    const callbackPaginaSeleccionada = jest.fn();
    const POKEMONES_POR_PAGINA = 20;

    test('Probar que la pagina anterior este dasactivada', () => { 
        
        mostrarPaginador(testTotalPokemones, testPaginaActual, testUrlSiguiente, '', callbackPaginaSeleccionada);
        const $paginaAnterior = document.querySelector('.page-item.disabled');
        expect($paginaAnterior.textContent).toBe('Anterior');

    });

    test('Probar que la pagina siguiente este dasactivada', () => { 
        
        mostrarPaginador(testTotalPokemones, testPaginaActual, '', testUrlAnterior, callbackPaginaSeleccionada);
        const $paginaSiguiente = document.querySelector('.page-item.disabled');
        expect($paginaSiguiente.textContent).toBe('Siguiente');

    });

    test('Probar que exista el numero total de paginas', () => {
        
        const totalPaginas = Math.ceil(testTotalPokemones / POKEMONES_POR_PAGINA);
        mostrarPaginador(testTotalPokemones, testPaginaActual, '', testUrlAnterior, callbackPaginaSeleccionada);
        const $paginas = document.querySelectorAll('[href="#"]');
        expect($paginas.length).toBe(totalPaginas);

    });

    test('Probar que la pagina numero 2 tenga la clase activa', () => {
        mostrarPaginador(testTotalPokemones, testPaginaActual, '', testUrlAnterior, callbackPaginaSeleccionada);
        const $paginaActiva = document.querySelector('.active');
        expect($paginaActiva.textContent).toBe('2');
    });

})

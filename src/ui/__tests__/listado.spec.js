/// <reference types='Jest' />

import {actualizarTextoIndicePokemones, mostrarListadoPokemones} from '../listado.js';

const arregloTest = ['test1','test2','test3'];
const functionMock = jest.fn();

it('Actualiza texto indice pokemones', () =>{

    document.body.innerHTML = '<div id="indice"></div>';
    actualizarTextoIndicePokemones('test');
    expect(document.querySelector('#indice').textContent).toContain('test');
});

it('Muestra listado de pokemones', () =>{

    mostrarListadoPokemones(arregloTest, functionMock);
    expect(document.querySelectorAll('.list-group-item')).toHaveLength(arregloTest.length);

});

it('Prueba funcion de callback', () =>{

    mostrarListadoPokemones(arregloTest, functionMock);

    expect(document.querySelectorAll('.list-group-item').
    forEach(elemento => {
        elemento.click();
    }))

    expect(functionMock).toHaveBeenCalledTimes(arregloTest.length);
})

it('Probar funcion de callback predeterminada', () =>{

    mostrarListadoPokemones(arregloTest);

    expect(document.querySelectorAll('.list-group-item').
    forEach(elemento => {
        elemento.click();
    }))

    expect(functionMock).toHaveBeenCalledTimes(arregloTest.length);
});
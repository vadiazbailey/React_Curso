import React from 'react';
import '../styleesheet/Boton.css';

function Boton(props) {
    /**Se usa para saber si una cadena de caracteres no es un numero */
    const esOperador = valor => {
        return isNaN(valor) && valor != "." && valor != "=";
    };

    return (
        /**trimEnd: remueve los espacios del final */
        <div className={`boton-contenedor ${ esOperador(props.children) ? 'operador' : '' }`.trimEnd()} >
            {props.children}
        </div>
    );
}

export default Boton;
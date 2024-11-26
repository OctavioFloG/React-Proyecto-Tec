import './App.css';
import freecodecamplogo from './img/freecodecamp-logo.png';
import Boton from './components/boton';
import Pantalla from './components/pantalla'
import BotonClear from './components/boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

   const [input, setInput] = useState('');

   const agregarInput = valor => {
      const operadores = ['+', '-', '*', '/', '.'];
      if (input === '' && operadores.includes(valor)) { //No permite poner un operando al iniciode
         return;
      }
      if (operadores.includes(input.slice(-1)) && operadores.includes(valor)) {
         // Reemplaza el último operador con el nuevo
         setInput(input.slice(0, -1) + valor);
      } else {
         setInput(input + valor);
      }
   };

   const calcularResultado = () => {
      // Lista de operadores
      const operadores = ['+', '-', '*', '/', '.'];

      // Verifica si el último carácter es un operador
      if (operadores.includes(input.toString().slice(-1))) {
         alert('La expresión no puede terminar con un operador.');
         return; // No procede con la evaluación
      }

      // Si la validación es correcta, evalúa la expresión
      if (input) {
         setInput(evaluate(input).toString()); // Convierte el resultado a cadena
      } else {
         alert('Ingrese valores para poder evaluar');
      }
   };


   return (
      <div className="App">
         {/* <div className="freecodecamp-logo-contenedor">
        <img src={freecodecamplogo} className='freecodecamp-logo' alt='Logo de freecodecamp' />
      </div> */}
         <div className="contenedor-calculadora">
            <Pantalla input={input} />
            <div className='fila'>
               <Boton manejarClick={agregarInput}>1</Boton>
               <Boton manejarClick={agregarInput}>2</Boton>
               <Boton manejarClick={agregarInput}>3</Boton>
               <Boton manejarClick={agregarInput}>+</Boton>
            </div>
            <div className='fila'>
               <Boton manejarClick={agregarInput}>4</Boton>
               <Boton manejarClick={agregarInput}>5</Boton>
               <Boton manejarClick={agregarInput}>6</Boton>
               <Boton manejarClick={agregarInput}>-</Boton>
            </div>
            <div className='fila'>
               <Boton manejarClick={agregarInput}>7</Boton>
               <Boton manejarClick={agregarInput}>8</Boton>
               <Boton manejarClick={agregarInput}>9</Boton>
               <Boton manejarClick={agregarInput}>*</Boton>
            </div>
            <div className='fila'>
               <Boton manejarClick={calcularResultado}>=</Boton>
               <Boton manejarClick={agregarInput}>0</Boton>
               <Boton manejarClick={agregarInput}>.</Boton>
               <Boton manejarClick={agregarInput}>/</Boton>
            </div>
            <div className='fila'>
               <BotonClear manejarClear={() => setInput('')}>Borrar</BotonClear>
            </div>
         </div>
      </div>
   );
}

export default App;

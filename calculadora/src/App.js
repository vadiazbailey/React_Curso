import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import freecodecampLogo from './images/fcc_secondary_large.svg';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freecodecampLogo}
          className='freecodecamp-logo'
          alt='logo'
        />
      </div>
      <div className='calculadora-contenedor'>
        <Pantalla />
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'> </div>
      </div>
    </div>
  );
}

export default App;

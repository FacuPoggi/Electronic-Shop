import {useState} from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemCount = ({inicial, stock, onAdd}) => {

    const {darkMode} = useDarkModeContext()

    const [contador, setContador] = useState(inicial);

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    const agregarAlCarrito = () => onAdd(contador)

    return (
        <div className='contador'>
            <button className={`btn btn-dark contadorIzq ${darkMode ? 'btnBlack' : 'btnWhite' } `} onClick={() => restar()}>-</button>
            <div className={`${darkMode ? 'textBlackNumber' : 'textWhiteNumber'}`}>{contador}</div>
            <button className={`btn btn-dark contadorDer ${darkMode ? 'btnBlack' : 'btnWhite' } `} onClick={() => sumar()}>+</button>
            <button className={`btn btn-dark btnAgregar ${darkMode ? 'btnBlack' : 'btnWhite' } `} onClick={agregarAlCarrito} ><i className='bx bxs-cart-add bx-sm'></i></button>
        </div>
    );
}

export default ItemCount;

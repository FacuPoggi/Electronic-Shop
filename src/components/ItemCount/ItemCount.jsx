import {useState} from 'react';

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    return (
        <div>
            <button className='btn btn-dark contadorIzq' onClick={() => sumar()}>+</button>
            {contador}
            <button className='btn btn-dark contadorDer' onClick={() => restar()}>-</button>
        </div>
    );
}

export default ItemCount;

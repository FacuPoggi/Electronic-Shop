import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import { consultarBDD } from "../../assets/funtions"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useDarkModeContext } from "../../context/DarkModeContext";

const ItemDetailContainer = () => {

    const {darkMode} = useDarkModeContext()

    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const prod = productos.find(product => product.id === parseInt(id))
            setProducto(prod)
        })


    }, []);

    return (
        <div className={`card mb-3 container itemDetail ${darkMode ? 'cardBlack' : 'cardWhite' }`}>
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;

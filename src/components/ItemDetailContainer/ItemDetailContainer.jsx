import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { consultarBDD } from "../../assets/funtions"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { getProducto } from "../../assets/firebase";

const ItemDetailContainer = () => {

    const { darkMode } = useDarkModeContext()

    const [producto, setProducto] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        getProducto(id).then(prod => setProducto(prod))

    }, []);

    return (
        <div className={`card mb-3 container itemDetail ${darkMode ? 'cardBlack' : 'cardWhite'}`}>
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;

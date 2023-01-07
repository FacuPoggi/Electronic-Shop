import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";


const ItemDetail = ({ item }) => {

    const { darkMode } = useDarkModeContext()
    const { addItem } = useCarritoContext()

    const onAdd = (contador) => {
        addItem(item, contador)
    }


    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img className="img-fluid rounded-start" src={item.img} alt="" />
            </div>
            <div className="col-md-8">
                <div className={`card-body cardProducto ${darkMode ? 'cardBlack' : 'cardWhite'} `}>
                    <h5 className={`card-title ${darkMode ? 'textBlack' : 'textWhite'}`}>{item.nombre}</h5>
                    <p className={`card-text ${darkMode ? 'textBlack' : 'textWhite'}`}>Modelo: {item.modelo} </p>
                    <p className={`card-text ${darkMode ? 'textBlack' : 'textWhite'}`}>Marca: {item.marca} </p>
                    <p className={`card-text ${darkMode ? 'textBlack' : 'textWhite'}`}>Precio: ${item.precio} </p>
                    <p className={`card-text ${darkMode ? 'textBlack' : 'textWhite'}`}>Stock: {item.stock}</p>
                    <ItemCount inicial={1} stock={item.stock} onAdd={onAdd} />
                    <br />
                    <Link to={'/cart'} className="btn btn-dark">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

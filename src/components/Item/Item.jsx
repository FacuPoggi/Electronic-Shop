import { Link } from "react-router-dom"; //etiqueta a

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";


//Genera la Card del producto
const Item = ({ producto }) => {

    const {darkMode} = useDarkModeContext()

    // Crea la card con los datos que pasa el componente ItemList

    return (
        <>
            <div className={`card cardProducto ${darkMode ? 'cardBlack' : 'cardWhite' } `}>
                <img src={producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className={`card-title ${darkMode ? 'textBlack' :'textWhite'}`}>{producto.nombre}</h5>
                    <p className={`card-text ${darkMode ? 'textBlack' :'textWhite'}`}>{producto.marca}</p>
                    <p className={`card-text ${darkMode ? 'textBlack' :'textWhite'}`}>$ {new Intl.NumberFormat("de-DE").format(producto.precio)}</p>
                    <Link className={`btn btn-dark ${darkMode ? 'btnBlack' : 'btnWhite' } `}to={`/product/${producto.id}`}>Ver Producto</Link>
                </div>
            </div>

        </>
    );
}

export default Item;

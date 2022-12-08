import { Link } from "react-router-dom"; //etiqueta a


//Genera la Card del producto
const Item = ({ producto }) => {

    // Crea la card con los datos que pasa el componente ItemList

    return (
        <>
            <div className="card cardProducto">
                <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.marca}</p>
                    <p className="card-text">$ {new Intl.NumberFormat("de-DE").format(producto.precio)}</p>
                    <Link className="btn btn-dark" to={`/product/${producto.id}`}>Ver Producto</Link>
                </div>
            </div>

        </>
    );
}

export default Item;

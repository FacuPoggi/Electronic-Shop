import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from "../../context/DarkModeContext"
const Cart = () => {
    const { darkMode } = useDarkModeContext()
    const { carrito, emptyCart, totalPrice, removeItem } = useCarritoContext()

    return (
        <>
            {carrito.length === 0 ?
                <div className="carritoPosicion">
                    <div className="carritoVacio">
                        <h1 className={`${darkMode ? 'textBlack' : 'textWhite'}`}>Carrito Vacio</h1>
                        <Link to={'/'} className="btn btn-dark">Continuar Comprando</Link>
                    </div>
                </div>

                :
                <div className="container cartContainer">

                    {
                        carrito.map(prod =>
                            <div className={`card mb-3 cart ${darkMode ? 'cartInfoBlack' : 'cartInfoWhite'}`} key={prod.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={prod.img} alt="Producto" className="imgCart" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body cartInfo">
                                        <h5 className="card-title">{`${prod.nombre} ${prod.marca}`}</h5>
                                        <p className="card-text">Cantidad: {prod.cant}</p>
                                        <p className="card-text">Precio por unidad: {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                        <p className="card-text">Precio Total: {new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                                        <div className="iconoBtn">
                                            <button className="btn btn-danger icono" onClick={() => removeItem(prod.id)}><i className='bx bx-trash'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}

                    <div>
                        <p className={`${darkMode ? 'textBlack' : 'textWhite'}`}>Resumen Total: ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    </div>
                    <div>
                        <button className="btn btn-danger cartBotones" onClick={emptyCart}>Vaciar Carrito</button>
                        <Link to={'/'} className="btn btn-dark cartBotones">Continuar Comprando</Link>
                        <Link to={'/checkout'} className="btn btn-dark cartBotones">Finalizar Compra</Link>
                    </div>
                </div>
            }
        </>


    );
}

export default Cart;



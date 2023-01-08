import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from "../../context/DarkModeContext"
const Cart = () => {
    const { darkMode } = useDarkModeContext()
    const { carrito, emptyCart, totalPrice, removeItem } = useCarritoContext()

    return (
        <>
            {carrito.length === 0 ?
                <>
                    <h1 className={`${darkMode ? 'textBlack' : 'textWhite'}`}>Carrito Vacio</h1>
                    <Link to={'/'} className="btn btn-dark">Continuar Comprando</Link>
                </>
                :
                <div className="container cartContainer">

                    {
                        carrito.map(prod =>
                            <div className="card mb-3" key={prod.id} style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={prod.img} alt="Producto" className="img-fluid rounded-start" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{`${prod.nombre} ${prod.marca}`}</h5>
                                        <p className="card-text">Cantidad: {prod.cant}</p>
                                        <p className="card-text">Precio por unidad: {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                        <p className="card-text">Precio Total: {new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                                    </div>
                                    <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><i className='bx bx-trash'></i></button>
                                </div>
                            </div>

                        )}


                    <div>
                        <p className={`${darkMode ? 'textBlack' : 'textWhite'}`}>Resumen Total: ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>

                        <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>

                        <Link to={'/'} className="btn btn-dark">Continuar Comprando</Link>
                        <Link to={'/checkout'} className="btn btn-dark">Finalizar Compra</Link>
                    </div>
                </div>
            }
        </>


    );
}

export default Cart;



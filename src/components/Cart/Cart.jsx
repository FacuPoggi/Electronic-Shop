import { Link } from "react-router-dom";
const Cart = () => {
    return (
        <>
            <h1>Proximos Productos Aqui</h1>

            <Link to={'/checkout'} className="btn btn-dark">Finalizar Compra</Link>
        </>
    );
}

export default Cart;

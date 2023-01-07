import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

const CartWidget = () => {

    const { getItemQuantity } = useCarritoContext()


    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="btn carrito" to={'/cart'}><i className='bx bxs-cart bx-sm'></i>
                {getItemQuantity() > 0 && <p className="carritoNum">{getItemQuantity()}</p>}
                </Link>
            </li>
        </ul>
    );
}

export default CartWidget;

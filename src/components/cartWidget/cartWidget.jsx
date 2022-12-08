import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="btn carrito" to={'/cart'}><i className='bx bxs-cart bx-sm'></i></Link>
            </li>
            <p className="carritoNum">0</p>
        </ul>
    );
}

export default CartWidget;

import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light barraNavegacion">
            <div className="container-fluid">
                <button className="navbar-brand" href="#"><Link className="logo" to={'/'}><i className='bx bx-save bx-md'></i></Link></button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <Categorias/>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar;

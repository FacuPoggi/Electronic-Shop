import CartWidget from "../cartWidget/cartWidget";
import Categorias from "./categorias/categorias";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light barraNavegacion">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="#"><i class='bx bx-save bx-md'></i></a>
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

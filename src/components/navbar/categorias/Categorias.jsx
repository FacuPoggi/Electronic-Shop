import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link active categoria" href="#"><Link className="categoria" to={'/category/Laptop'}>Laptops</Link></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active categoria" href="#"><Link className="categoria" to={'/category/Celulares'}>Celulares</Link></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active categoria" href="#"><Link className="categoria" to={'/category/Hogar'}>Hogar</Link></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active categoria" href="#"><Link className="categoria" to={'/category/Gaming'}>Gaming</Link></button>
                        </li>
                    </ul>
            </div>
    );
}

export default Categorias;

const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active categoria" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active categoria" href="#">Hogar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active categoria" href="#">Gaming</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active categoria" href="#">Celulares</a>
                        </li>
                    </ul>
            </div>
    );
}

export default Categorias;
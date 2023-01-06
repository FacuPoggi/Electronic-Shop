import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
const ItemDetail = ({ item }) => {

    const onAdd = (contador) => {
        console.log(contador);
    }


    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img className="img-fluid rounded-start" src={`../img/${item.img}`} alt="" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Modelo: {item.modelo} </p>
                    <p className="card-text">Marca: {item.marca} </p>
                    <p className="card-text">Precio: ${item.precio} </p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <ItemCount inicial={1} stock={item.stock} onAdd={onAdd} />
                    <br />
                    <Link to={'/cart'} className="btn btn-dark">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

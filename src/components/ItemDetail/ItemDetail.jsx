import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ item }) => {
    console.log(item);
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
                    <ItemCount stock={item.stock}/> 
                    <br/>
                    <button className="btn btn-dark">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

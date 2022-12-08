import Item from "../Item/Item";


//Modifica el array de objetos

const ItemList = ({productList}) => {

    //Con el map se transforma todo en un componente Item

    return (
        <>
            {productList.map(product => <Item key={product.id} producto={product}/>)}
        </>
    );
}

export default ItemList;

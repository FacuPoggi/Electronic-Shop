import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import { consultarBDD } from "../../assets/funtions"

import { cargarBDD } from "../../assets/firebase";
//ItemListContainer consulta la BDD

const ItemListContainer = ({ }) => {

    const [productos, setProductos] = useState([])
    const { category } = useParams()


    useEffect(() => {
        if (category) {
            consultarBDD('../json/productos.json').then(products => {
                const productList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos)
            })
        } else{
            consultarBDD('./json/productos.json').then(products => {
                const productList = products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos)
            })
        }
        

        //cargarBDD().then(productos => console.log(productos));



    }, [category]);


    // consulta una vez cuando esta el array vacio []. Se ejecuta cuando suceda cambios en todo el array
    //[prop] cuando se modifica un objeto interno del array.

    return (
        <>
            <div className="row cardProductos">
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;

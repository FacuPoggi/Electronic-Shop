import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "electro-shop-67ad8.firebaseapp.com",
    projectId: "electro-shop-67ad8",
    storageBucket: "electro-shop-67ad8.appspot.com",
    messagingSenderId: "149516416372",
    appId: "1:149516416372:web:8c38db746ff02cfe036821"
};


const app = initializeApp(firebaseConfig);

const dataBase = getFirestore()


const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(dataBase, 'productos'), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}

//CRUD de productos
const getProductos = async () => {
    const productos = await getDocs(collection(dataBase, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(dataBase, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(dataBase, "productos", id), info)
    return estado
}


const deleteProducto = async (id) => {
    const estado = await deleteDoc(doc(dataBase, "productos", id))
    return estado
}

//Fin de CRUD de productos

//Create y Read - Ordenes de Compra


const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(dataBase, "ordenCompra"),{
        nombreCompleto: cliente.nombreCompleto,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular,
        fecha: fecha,
        precio: preTotal
    })

    return ordenCompra
}


const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(dataBase, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}



export { cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra }
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

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
    productos.forEach(async (prod) =>{
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

export {cargarBDD}
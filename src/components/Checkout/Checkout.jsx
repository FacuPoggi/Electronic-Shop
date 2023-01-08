import React from "react"
import { useNavigate } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext"
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../assets/firebase"
import { useCarritoContext } from "../../context/CarritoContext"
import { toast } from "react-toastify"


const Checkout = () => {

    const { totalPrice, carrito, emptyCart } = useCarritoContext()
    const { darkMode } = useDarkModeContext()


    const datosFormulario = React.useRef()

    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                } else {
                    console.log("stock no valido");
                    // Caso uso producto no comprado
                }
            })
        })


        createOrdenCompra(cliente, totalPrice(), new Date().toISOString().slice(0, 10)).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por tu compra, su orden es ${item.id}!`,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: `${darkMode ? 'dark' : 'light'}`,
                    })
                emptyCart()
                e.target.reset()
                navigate('/')
            })

        })

    }

    return (
        <div className="container formulario">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Celular</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-dark">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;



import React from "react"
import { useNavigate } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext"
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../assets/firebase"
import { useCarritoContext } from "../../context/CarritoContext"
import { toast } from "react-toastify"
import { useState, useEffect } from "react"


const Checkout = () => {

    const initialValues = { nombreCompleto: "", email: "", validateEmail: "", dni: "", celular: "", direccion: "" }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            consultarFormulario();
        }
    }, [formErrors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        e.target.reset()
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //Errores de nombre y apellido
        if (!values.nombreCompleto) {
            errors.nombreCompleto = "Debe ingresar su nombre y apellido";
        } else if (!regex.test(values.nombreCompleto)){
            errors.nombreCompleto = "No utilice caracteres especiales";
        }
        //Errores del email
        if (!values.email) {
            errors.email = "Debe ingresar un email";
        } else if (!regex.test(values.email)) {
            errors.email = "Ese no es un formato valido de email";
        }
        //Errores del email a validar 
        if (!values.validateEmail) {
            errors.validateEmail = "Debe ingresar nuevamente el email";
        } else if (!regex.test(values.validateEmail)) {
            errors.validateEmail = "Ese no es un formato valido de email";
        } else if (values.validateEmail !== values.email) {
            errors.validateEmail = "Los emails no coinciden";
        }
        //Errores del DNI
        if (!values.dni) {
            errors.dni = "Debe ingresar un DNI";
        }
        //Errores del Celular
        if (!values.celular) {
            errors.celular = "Debe ingresar un celular";
        }
        //Errores de la dirección
        if (!values.direccion) {
            errors.direccion = "Debe ingresar una direccion";
        }
        return errors;
    };





    const { totalPrice, carrito, emptyCart } = useCarritoContext()
    const { darkMode } = useDarkModeContext()

    const datosFormulario = React.useRef()

    let navigate = useNavigate()

    const consultarFormulario = (e) => {
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

        delete cliente["validateEmail"]

        createOrdenCompra(cliente, totalPrice(), new Date().toISOString().slice(0, 10)).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por tu compra, su orden es ${item.id}!`, {
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
                navigate('/')
            })

        })

    }

    return (
        <div className="container formulario">
            <form onSubmit={handleSubmit} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombreCompleto" value={formValues.nombreCompleto} onChange={handleChange} />
                    <p className={`${darkMode ? 'alertaCheckoutBlack': 'alertaCheckoutWhite'}`}>{formErrors.nombreCompleto}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Email</label>
                    <input type="email" className="form-control" name="email" value={formValues.email} onChange={handleChange} />
                    <p className={`${darkMode ? 'alertaCheckoutBlack': 'alertaCheckoutWhite'}`}>{formErrors.email}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Repetir Email</label>
                    <input type="email" className="form-control" name="validateEmail" value={formValues.validateEmail} onChange={handleChange} />
                    <p className={`${darkMode ? 'alertaCheckoutBlack': 'alertaCheckoutWhite'}`}>{formErrors.validateEmail}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>DNI</label>
                    <input type="number" className="form-control" name="dni" value={formValues.dni} onChange={handleChange}/>
                    <p className={`${darkMode ? 'alertaCheckoutBlack': 'alertaCheckoutWhite'}`}>{formErrors.dni}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Celular</label>
                    <input type="number" className="form-control" name="celular" value={formValues.celular} onChange={handleChange} />
                    <p className={`${darkMode ? 'alertaCheckoutBlack': 'alertaCheckoutWhite'}`}>{formErrors.celular}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className={`form-label ${darkMode ? 'labelBlack' : 'labelWhite'}`}>Dirección</label>
                    <input type="text" className="form-control" name="direccion" value={formValues.direccion} onChange={handleChange} />
                    <p className={`${darkMode ? 'alertaCheckoutBlack': 'alertaCheckoutWhite'}`}>{formErrors.direccion}</p>
                </div>
                <button type="submit" className="btn btn-dark">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;



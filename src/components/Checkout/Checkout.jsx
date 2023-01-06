import React from "react"
import { useNavigate } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext"

const Checkout = () => {

    const {darkMode} = useDarkModeContext()

    const datosFormulario = React.useRef()
    
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        e.target.reset()
        navigate('/')
    }

    return (
        <div className="container formulario">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className={`form-label ${darkMode ? 'labelBlack': 'labelWhite'}`}>Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className={`form-label ${darkMode ? 'labelBlack': 'labelWhite'}`}>Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className={`form-label ${darkMode ? 'labelBlack': 'labelWhite'}`}>DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className={`form-label ${darkMode ? 'labelBlack': 'labelWhite'}`}>Celular</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className={`form-label ${darkMode ? 'labelBlack': 'labelWhite'}`}>Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-dark">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;
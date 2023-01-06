import './botonDarkMode.css'
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';
const BotonDarkMode = () => {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (

            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" onInput={ () => toggleDarkMode() } id="checkbox"/>
                    <div className="slider round"/>
                </label>
            </div>

    );
}

export default BotonDarkMode;
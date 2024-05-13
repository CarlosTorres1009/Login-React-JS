import React from "react";
import ".//LoginFormulario.css";
import { FaUser, FaLock } from 'react-icons/fa';




const LoginFormulario = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Formulario</h1>
                <div className="input-box">
                    <input type="text" placeholder="Nombre" required />
                    <FaUser className= 'icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className= 'icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Recordar</label>
                    <a href="#">Olvido su password?</a>
                </div>
                
                <button type="submit">Ingresar</button>

                <div className="register-link">
                    <p>No tienes una cuenta? <a href="#">Registrate</a></p>
                </div>
            </form>
        </div>
    );
};
export default LoginFormulario;
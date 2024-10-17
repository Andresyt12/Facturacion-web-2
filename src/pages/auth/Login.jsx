import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (email === 'facturapro@gmail.com' && password === 'factura123') {
            // Redirigir o hacer algo si las credenciales son correctas
            alert('Inicio de sesión exitoso');
        } else {
            // Mostrar mensaje de error si las credenciales no coinciden
            setErrorMessage('Correo o contraseña incorrectos');
        }
    };

    return (
        <section className="login-container">
            <div className="login-box">
                <img className="logo" src="/public/img/loginPro.jpeg" alt="logo" />
                <form>
                    <section>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </section>
                    <section>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </section>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <a href="#">¿Olvidaste Tu Contraseña?</a>
                    <button type="button" onClick={handleLogin}>Iniciar Sesión</button>
                </form>
            </div>
        </section>
    );
};

export default Login;

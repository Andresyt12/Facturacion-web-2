import { useState } from 'react';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'facturapro@gmail.com' && password === 'factura123') {
            // Mostrar mensaje de éxito si las credenciales son correctas
            Swal.fire({
                title: 'Inicio de sesión exitoso',
                text: 'Bienvenido a Factura Pro',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } else {
            // Mostrar mensaje de error si las credenciales no coinciden
            Swal.fire({
                title: 'Inicio de sesión fallido',
                text: 'Correo o contraseña incorrectos',
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
            });
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
                    <a href="#">¿Olvidaste Tu Contraseña?</a>
                    <button type="button" onClick={handleLogin}>Iniciar Sesión</button>
                </form>
            </div>
        </section>
    );
};

export default Login;


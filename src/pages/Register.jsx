import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './Register.css';

const Register = () => {
    const [factura, setFactura] = useState({
        numero: '',
        monto: '',
        categoria: '',
        vendedor: '',
        ciudad: '',
        fecha: ''
    });

    const handleChange = (e) => {
        setFactura({ ...factura, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Factura registrada:', factura);
        alert('Factura registrada con éxito');
    };

    return (
        <section className="factura-pro">
            <aside className="sidebar">
                <div className="admin-icon">
                    <img src="public\img\loginPro.jpeg" alt="Profile Icon" className="login" />
                </div>
                <p>Administrador</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/facturapro">Registro de Facturas</Link>
                        </li>
                        <li>
                            <Link to="/registro">Control de Gastos</Link>
                        </li>
                        <li>
                            <Link to="/Egresos">Reportes Financieros</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                <h1>Registros de Factura</h1>
                <div className="form-container">
                    <h2>Registro y Almacenamiento de factura</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Número de Factura:
                            <input
                                type="text"
                                name="numero"
                                value={factura.numero}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Monto:
                            <input
                                type="number"
                                name="monto"
                                value={factura.monto}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Categoría:
                            <input
                                type="text"
                                name="categoria"
                                value={factura.categoria}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Vendedor:
                            <input
                                type="text"
                                name="vendedor"
                                value={factura.vendedor}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Ciudad:
                            <input
                                type="text"
                                name="ciudad"
                                value={factura.ciudad}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Fecha:
                            <input
                                type="date"
                                name="fecha"
                                value={factura.fecha}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <div className="button-group">
                            <button type="submit" className="register-btn">Registrar</button>
                            <button 
                                type="button" 
                                className="cancel-btn" 
                                onClick={() => setFactura({
                                    numero: '',
                                    monto: '',
                                    categoria: '',
                                    vendedor: '',
                                    fecha: ''
                                })}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default Register;

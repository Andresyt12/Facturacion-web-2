import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Egresos.css';
import './Register.css';
import { FaSignOutAlt } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate(); 

    const [factura, setFactura] = useState({
        numero: '',
        monto: '',
        categoria: '',
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

    const handleLogout = () => {
        navigate('/Login');
    };

    return (
        <section className="factura-pro">
            <aside className="sidebar">
                <div className="admin-icon">
                    <img src="public/img/loginPro.jpeg" alt="Profile Icon" className="login" />
                </div>
                
                <nav>
                    <div className='menu'>
                        <ul>
                            <li>
                                <Link to="/RegistroFac">Facturas</Link>
                            </li>
                            <li>
                                <Link to="/Register">Gastos</Link>
                            </li>
                            <li>
                                <Link to="/Egresos">Reportes</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>

            <main className="main-content">
                <button className="logout-btn" onClick={handleLogout}>
                    <FaSignOutAlt size={20} />
                </button>

                <h1>Busqueda de factura</h1>
                
                <div className="input-container">
                    <form onSubmit={handleSubmit} className="horizontal-form">
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
                            <select
                                name="categoria"
                                value={factura.categoria}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccione una categoría</option>
                                <option value="DDS">DDS</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Audífonos">Audífonos</option>
                                <option value="Tablet">Tablet</option>
                                <option value="Celulares">Celulares</option>
                            </select>
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
                            <button type="submit" className="register-btn">Buscar</button>
                            <button 
                                type="button" 
                                className="cancel-btn" 
                                onClick={() => setFactura({
                                    numero: '',
                                    monto: '',
                                    categoria: '',
                                    ciudad: '',
                                    fecha: ''
                                })}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="results-container">
                   
                </div>
            </main>
        </section>
    );
};

export default Register;


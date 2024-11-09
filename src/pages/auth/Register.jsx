import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Egresos.css';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const [factura, setFactura] = useState({
        monto: '',
        categoria: '',
        fecha: ''
    });

    // Inicializamos con 10 registros predeterminados sin los campos "numero" y "ciudad"
    const [facturasList, setFacturasList] = useState([
        { monto: '1000', categoria: 'Laptop', fecha: '2024-11-01' },
        { monto: '150', categoria: 'Celulares', fecha: '2024-11-02' },
        { monto: '300', categoria: 'Tablet', fecha: '2024-11-03' },
        { monto: '800', categoria: 'Laptop', fecha: '2024-11-04' },
        { monto: '500', categoria: 'Audífonos', fecha: '2024-11-05' },
        { monto: '250', categoria: 'DDS', fecha: '2024-11-06' },
        { monto: '100', categoria: 'Celulares', fecha: '2024-11-07' },
        { monto: '1200', categoria: 'Laptop', fecha: '2024-11-08' },
        { monto: '200', categoria: 'Audífonos', fecha: '2024-11-09' },
        { monto: '50', categoria: 'Tablet', fecha: '2024-11-10' }
    ]);

    const handleChange = (e) => {
        setFactura({ ...factura, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Guardamos el registro en la lista sin los campos eliminados
        setFacturasList([...facturasList, factura]);
        // Limpiamos los campos del formulario
        setFactura({
            monto: '',
            categoria: '',
            fecha: ''
        });
        alert('Factura registrada con éxito');
    };

    const handleLogout = () => {
        navigate('/Login');
    };

    const handleDelete = (index) => {
        // Eliminamos el registro seleccionado
        const newList = facturasList.filter((_, i) => i !== index);
        setFacturasList(newList);
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

                <h1>Ingresar Gastos</h1>
                
                <div className="input-container">
                    <form onSubmit={handleSubmit} className="horizontal-form">
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
                            <button type="submit" className="register-btn">Agregar</button>
                            <button 
                                type="button" 
                                className="cancel-btn" 
                                onClick={() => setFactura({
                                    monto: '',
                                    categoria: '',
                                    fecha: ''
                                })}
                            >
                                Limpiar
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="results-container">
                    <h2>Lista de Facturas</h2>
                    <div className="factura-grid">
                        {facturasList.map((factura, index) => (
                            <div key={index} className="factura-item">
                                <div><strong>Monto:</strong> {factura.monto}</div>
                                <div><strong>Categoría:</strong> {factura.categoria}</div>
                                <div><strong>Fecha:</strong> {factura.fecha}</div>
                                <button onClick={() => handleDelete(index)} className="delete-btn">Eliminar</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Register;



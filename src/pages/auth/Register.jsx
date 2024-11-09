import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Egresos.css';
import './Register.css';
import { FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();

    const [factura, setFactura] = useState({
        numero: '',
        monto: '',
        categoria: '',
        ciudad: '',
        fecha: ''
    });

    const [facturasList, setFacturasList] = useState([
        { numero: '001', monto: '1000', categoria: 'Laptop', ciudad: 'Medellin', fecha: '2024-11-01' },
        { numero: '002', monto: '150', categoria: 'Celulares', ciudad: 'Bogota', fecha: '2024-11-02' },
        { numero: '003', monto: '300', categoria: 'Tablet', ciudad: 'Cali', fecha: '2024-11-03' },
        { numero: '004', monto: '800', categoria: 'Laptop', ciudad: 'Bucaramanga', fecha: '2024-11-04' },
        { numero: '005', monto: '500', categoria: 'Audífonos', ciudad: 'Cartagena', fecha: '2024-11-05' },
        { numero: '006', monto: '250', categoria: 'DDS', ciudad: 'Medellin', fecha: '2024-11-06' },
        { numero: '007', monto: '100', categoria: 'Celulares', ciudad: 'Cali', fecha: '2024-11-07' },
        { numero: '008', monto: '1200', categoria: 'Laptop', ciudad: 'Bogota', fecha: '2024-11-08' },
        { numero: '009', monto: '200', categoria: 'Audífonos', ciudad: 'Medellin', fecha: '2024-11-09' },
        { numero: '010', monto: '50', categoria: 'Tablet', ciudad: 'Cali', fecha: '2024-11-10' }
    ]);

    const handleChange = (e) => {
        setFactura({ ...factura, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        setFacturasList([...facturasList, factura]);

        setFactura({
            numero: '',
            monto: '',
            categoria: '',
            ciudad: '',
            fecha: ''
        });
      
        Swal.fire({
            icon: 'success',
            title: 'Factura registrada con éxito',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleLogout = () => {
        navigate('/Login');
    };

    const handleDelete = (index) => {
    
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
                            <button type="submit" className="register-btn">Agregar</button>
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
                                <div><strong>Factura Nº:</strong> {factura.numero}</div>
                                <div><strong>Monto:</strong> {factura.monto}</div>
                                <div><strong>Categoría:</strong> {factura.categoria}</div>
                                <div><strong>Ciudad:</strong> {factura.ciudad}</div>
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

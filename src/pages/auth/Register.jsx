import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Egresos.css';
import './Register.css';

const IVA_RATE = 0.16; // Tasa de IVA del 16%

const Register = () => {
    const navigate = useNavigate();

    const [factura, setFactura] = useState({
        monto: '',
        categoria: '',
        fecha: '',
        iva: 0,
        total: 0,
    });

    const [facturasList, setFacturasList] = useState([
        { monto: 1000, categoria: 'Cliente', fecha: '2024-11-01', iva: 160, total: 1.60 },
        { monto: 150, categoria: 'Empresas', fecha: '2024-11-02', iva: 24, total: 174 },
        { monto: 300, categoria: 'Cliente', fecha: '2024-11-03', iva: 48, total: 348 },
        { monto: 800, categoria: 'Empresas', fecha: '2024-11-04', iva: 128, total: 928 },
        { monto: 500, categoria: 'Cliente', fecha: '2024-11-05', iva: 80, total: 580 },
        { monto: 250, categoria: 'Empresas', fecha: '2024-11-06', iva: 40, total: 290 },
        { monto: 100, categoria: 'Cliente', fecha: '2024-11-07', iva: 16, total: 116 },
        { monto: 1200, categoria: 'Empresas', fecha: '2024-11-08', iva: 192, total: 1392 },
        { monto: 200, categoria: 'Cliente', fecha: '2024-11-09', iva: 32, total: 232 },
        { monto: 50, categoria: 'Empresas', fecha: '2024-11-10', iva: 8, total: 58 },
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const monto = name === "monto" ? parseFloat(value) || 0 : parseFloat(factura.monto) || 0;
        const iva = monto * IVA_RATE;
        const total = monto + iva;

        setFactura({ ...factura, [name]: value, iva, total });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFacturasList([...facturasList, factura]);
        setFactura({
            monto: '',
            categoria: '',
            fecha: '',
            iva: 0,
            total: 0,
        });
        alert('Factura registrada con éxito');
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
                            Categoría:
                            <select
                                name="categoria"
                                value={factura.categoria}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seleccione una categoría</option>
                                <option value="Clientes">Clientes</option>
                                <option value="Empresas">Empresas</option>
                            </select>
                        </label>

                        <label>
                            Monto por Servicios:
                            <input
                                type="number"
                                name="monto"
                                value={factura.monto}
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
                                    monto: '',
                                    categoria: '',
                                    fecha: '',
                                    iva: 0,
                                    total: 0,
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
                                <div><strong>Monto:</strong> ${factura.monto}</div>
                                <div><strong>IVA:</strong> ${factura.iva.toFixed(2)}</div>
                                <div><strong>Total:</strong> ${factura.total.toFixed(2)}</div>
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




import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistroFac.css';

const RegistroFac = () => {
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
        <h1>Ingresar Facturas</h1>
        <div className="form-container">
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
            <label htmlFor="categoria">Categoría:</label>
            <select
              id="categoria"
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
              <button type="submit" className="register-btn">Guardar</button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={() => setFactura({
                  numero: '',
                  monto: '',
                  categoria: '',
                  vendedor: '',
                  ciudad: '',
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

export default RegistroFac;

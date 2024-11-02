import { Link } from 'react-router-dom';
import './RegistroFac.css';

const RegistroFac = () => {
  return (
    <section className="registro-section">
      <aside className="sidebar">
        <div className="admin-icon">
          <img src="src/img/LoginPro.jpeg" alt="Profile Icon" className="login" />
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
        <header className="header">
          <h1 className="title">Control de Gastos</h1>
          <section className="date-selector">
            <input type="text" className="date-input" placeholder="dd/mm/yyyy" />
            <input type="text" className="date-input" placeholder="Fecha Final" />
            <button className="search-button">Buscar</button>
          </section>
          <input type="text" className="search-input" placeholder="Ingrese el número de la factura" />
        </header>

        <section className="table-section">
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Número de factura</th>
                <th>Monto</th>
                <th>Categoría</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí puedes agregar filas dinámicamente con la información de las facturas */}
            </tbody>
          </table>
        </section>
      </main>
    </section>
  );
};

export default RegistroFac;

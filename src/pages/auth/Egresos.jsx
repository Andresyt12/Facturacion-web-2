import React, { useEffect, useState } from "react";
import './Egresos.css';

const Egresos = () => {
  // Estado para almacenar la factura recuperada de localStorage
  const [factura, setFactura] = useState(null);
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [ciudadFiltro, setCiudadFiltro] = useState('');

  useEffect(() => {
    // Recuperar los datos de factura desde localStorage al cargar el componente
    const facturaGuardada = localStorage.getItem('factura');
    if (facturaGuardada) {
      setFactura(JSON.parse(facturaGuardada));
    }
  }, []);

  // Función para descargar la factura en formato PDF
  const descargarPDF = () => {
    if (!factura) return;
    const docContent = `
      Factura Registrada:
      Número: ${factura.numero}
      Monto: ${factura.monto}
      Categoría: ${factura.categoria}
      Vendedor: ${factura.vendedor}
      Ciudad: ${factura.ciudad}
      Fecha: ${factura.fecha}
    `;

    const blob = new Blob([docContent], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Factura.pdf';
    link.click();
  };

  // Función para descargar la factura en formato Excel
  const descargarExcel = () => {
    if (!factura) return;
    const csvContent = `Número,Monto,Categoría,Vendedor,Ciudad,Fecha\n${factura.numero},${factura.monto},${factura.categoria},${factura.vendedor},${factura.ciudad},${factura.fecha}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Factura.csv';
    link.click();
  };

  const handleFechaChange = (e) => {
    setFechaFiltro(e.target.value);
  };

  const handleCiudadChange = (e) => {
    setCiudadFiltro(e.target.value);
  };

  // Filtrar factura por fecha y ciudad
  const facturaFiltrada = factura && 
    (fechaFiltro === '' || factura.fecha.includes(fechaFiltro)) && 
    (ciudadFiltro === '' || factura.ciudad.includes(ciudadFiltro)) ? factura : null;

  // Función para manejar el logout
  const handleLogout = () => {
    // Aquí podrías limpiar cualquier estado o localStorage si es necesario
    window.location.href = '/Login'; // Redirige a la página de inicio de sesión
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <img src="public/img/loginPro.jpeg" alt="Logo Factura Pro" />
        </div>
        
        <ul className="menu">
          <li><a href="/RegistroFac">Facturas</a></li>
          <li><a href="/Register">Gastos</a></li>
          <li><a href="/Egresos">Informes</a></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Salir</button>
      </div>

      <main className="main-content">
        <h1>Reporte sobre ingresos y egresos</h1>
        <div className="filtros">
          <label>
            Filtrar por fecha:
            <input type="date" value={fechaFiltro} onChange={handleFechaChange} />
          </label>
          <label>
            Filtrar por ciudad:
            <input type="text" value={ciudadFiltro} onChange={handleCiudadChange} placeholder="Ciudad" />
          </label>
        </div>
        <section className="report">
          <section className="section">
            <h2>Ingresos</h2>
            <div className="download-icons">
              <img src="public/img/logoexcel.jpeg" alt="Descargar Excel" onClick={descargarExcel} />
              <img src="public/img/logopdf.jpeg" alt="Descargar PDF" onClick={descargarPDF} />
            </div>
          </section>
          <section className="section">
            <h2>Egresos</h2>
            <div className="download-icons">
              <img src="public/img/logoexcel.jpeg" alt="Descargar Excel" onClick={descargarExcel} />
              <img src="public/img/logopdf.jpeg" alt="Descargar PDF" onClick={descargarPDF} />
            </div>
          </section>
        </section>
        
      </main>
    </div>
  );
};

export default Egresos;


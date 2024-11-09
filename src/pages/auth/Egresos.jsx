import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import './Egresos.css';

const Egresos = () => {
  const [facturas, setFacturas] = useState([]);
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [ciudadFiltro, setCiudadFiltro] = useState('');

  useEffect(() => {
   
    const facturasGuardadas = localStorage.getItem('facturas');
    if (facturasGuardadas) {
      setFacturas(JSON.parse(facturasGuardadas));
    }
  }, []);


  const obtenerFacturasFiltradas = () => {
    return facturas.filter(factura =>
      (fechaFiltro === '' || factura.fecha === fechaFiltro) &&
      (ciudadFiltro === '' || factura.ciudad === ciudadFiltro)
    );
  };

  const descargarPDF = () => {
    const facturasFiltradas = obtenerFacturasFiltradas();
    if (facturasFiltradas.length === 0) return;

    const doc = new jsPDF();
    facturasFiltradas.forEach((factura, index) => {
      doc.text(`Factura Registrada:`, 10, 10 + (index * 10));
      doc.text(`Número: ${factura.numero}`, 10, 20 + (index * 10));
      doc.text(`Monto: ${factura.monto}`, 10, 30 + (index * 10));
      doc.text(`Categoría: ${factura.categoria}`, 10, 40 + (index * 10));
      doc.text(`Vendedor: ${factura.vendedor}`, 10, 50 + (index * 10));
      doc.text(`Ciudad: ${factura.ciudad}`, 10, 60 + (index * 10));
      doc.text(`Fecha: ${factura.fecha}`, 10, 70 + (index * 10));
      if (index < facturasFiltradas.length - 1) doc.addPage();
    });

    doc.save('Facturas.pdf');
  };

  // Función para descargar las facturas en formato Excel
  const descargarExcel = () => {
    const facturasFiltradas = obtenerFacturasFiltradas();
    if (facturasFiltradas.length === 0) return;

    const worksheet = XLSX.utils.json_to_sheet(facturasFiltradas);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Facturas");
    XLSX.writeFile(workbook, "Facturas.xlsx");
  };

  const handleFechaChange = (e) => {
    setFechaFiltro(e.target.value);
  };

  const handleCiudadChange = (e) => {
    setCiudadFiltro(e.target.value);
  };

  // Función para manejar el logout
  const handleLogout = () => {
    window.location.href = '/Login'; // Redirige a la página de inicio de sesión
  };

  const facturasFiltradas = obtenerFacturasFiltradas();

  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <img src="/img/loginPro.jpeg" alt="Logo Factura Pro" />
        </div>
        
        <ul className="menu">
          <li><a href="/RegistroFac">Facturas</a></li>
          <li><a href="/Register">Gastos</a></li>
          <li><a href="/Egresos">Reportes</a></li>
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
            <select value={ciudadFiltro} onChange={handleCiudadChange}>
              <option value="">Todas las ciudades</option>
              <option value="Cali">Cali</option>
              <option value="Medellin">Medellin</option>
              <option value="Bogota">Bogota</option>
              <option value="Pereira">Pereira</option>
              <option value="Manizalez">Manizalez</option>
              <option value="Barranquilla">Barranquilla</option>
              <option value="Cartagena">Cartagena</option>
            </select>
          </label>
        </div>
        <section className="report">
          <section className="section">
            <h2>Ingresos</h2>
            <div className="download-icons">
              <img src="/img/logoexcel.jpeg" alt="Descargar Excel" onClick={descargarExcel} />
              <img src="/img/logopdf.jpeg" alt="Descargar PDF" onClick={descargarPDF} />
            </div>
          </section>
          <section className="section">
            <h2>Egresos</h2>
            <div className="download-icons">
              <img src="/img/logoexcel.jpeg" alt="Descargar Excel" onClick={descargarExcel} />
              <img src="/img/logopdf.jpeg" alt="Descargar PDF" onClick={descargarPDF} />
            </div>
          </section>
        </section>
        {facturasFiltradas.length > 0 ? (
          facturasFiltradas.map((factura, index) => (
            <div className="factura" key={index}>
              <h2>Factura Registrada:</h2>
              <p>Número: {factura.numero}</p>
              <p>Monto: {factura.monto}</p>
              <p>Categoría: {factura.categoria}</p>
              <p>Vendedor: {factura.vendedor}</p>
              <p>Ciudad: {factura.ciudad}</p>
              <p>Fecha: {factura.fecha}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron facturas con los filtros seleccionados.</p>
        )}
      </main>
    </div>
  );
};

export default Egresos;




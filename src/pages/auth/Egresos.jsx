import React, { useEffect, useState } from "react";
import './Egresos.css';

const Egresos = () => {
  // Estado para almacenar la factura recuperada de localStorage
  const [factura, setFactura] = useState(null);

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

  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <img src="public/img/loginPro.jpeg" alt="Logo Factura Pro" />
        </div>
        
        <ul className="menu">
          <li><a href="/RegistroFac">Facturas</a></li>
          <li><a href="/Register">Gastos</a></li>
          <li><a href="/Egresos">Reportes</a></li>
        </ul>
      </div>

      <main className="main-content">
        <h1>Reporte sobre ingresos y egresos</h1>
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

        <div className="actions">
          <button className="btn guardar">Guardar</button>
          <button className="btn cancelar">Cancelar</button>
        </div>
      </main>
    </div>
  );
};

export default Egresos;

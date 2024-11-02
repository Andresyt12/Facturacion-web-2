import React from "react";
import './Egresos.css';

const Egresos = () => {
    return (
        
        
        <div className="container">
            <div className="sidebar">
                <div className="profile">
                    <img src="public\img\loginPro.jpeg" alt="Logo Factura Pro" />
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
                            <img src="public\img\logoexcel.jpeg" alt="Descargar Excel" />
                            <img src="public\img\logopdf.jpeg" alt="Descargar PDF" />
                        </div>
                    </section>
                    <section className="section">
                        <h2>Egresos</h2>
                        <div className="download-icons">
                            <img src="public\img\logoexcel.jpeg" alt="Descargar Excel" />
                            <img src="public\img\logopdf.jpeg" alt="Descargar PDF" />
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
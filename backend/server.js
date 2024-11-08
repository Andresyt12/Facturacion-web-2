// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { guardarRegistro, obtenerRegistros } = require('./controllers/registroController');

// Middleware para parsear JSON
app.use(bodyParser.json());

// Punto final para guardar datos enviados desde RegistroFac
app.post('/api/registrofac', guardarRegistro);

// Punto final para obtener y enviar datos guardados a Register
app.get('/api/register', obtenerRegistros);

// Configuración del puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

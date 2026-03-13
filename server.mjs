import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, 
  obtenerSuperheroesMayoresDe30Controller } from './controllers/superheroesController.mjs'

// Crear una instancia de Express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const PORT = 3005;

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/:mayorA30', obtenerSuperheroesMayoresDe30Controller);

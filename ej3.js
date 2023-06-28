// Ejercicio 3
// Crear un archivo con el nombre ej3.js
// Levantar un servidor de Express
//OK // Al llamar a localhost:3000/products se debe mostrar el siguiente JSON:
// {
//   description: 'Productos',
//   items: [
//     { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
//     { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
//     {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
//     {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
//     {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
//     {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
//   ]
// }
// Crear endpoint para poder crear un producto nuevo
// Crear endpoint para poder actualizar un producto
// Crear endpoint para poder eliminar un producto
// Crear filtro por precio de producto
// Crear filtro que muestre los productos con un precio entre 50 y 250.
// Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto
// Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto

//TODO: README con todos los puntos del ejercicio y borrar los comentarios de arriba

//1. IMPORTACIONES --------------------------------
const express = require('express');
const app = express();

const productos = [
        { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
        { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
        { id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
        { id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
        { id: 5,  nombre: 'Skin Valorant' , precio: 120},
        { id: 6, nombre: 'Taza de Star Wars' , precio: 220}
      ]

//2. MIDDLEWARES ----------------------------------
app.use(express.json())

//3. ENDPOINTS -----------------------------------

app.get("/products", (req, res) => {
    res.send(productos)
});

app.post("/products", (req, res) => {
    
})

//4. LISTEN PUERTO -------------------------------
app.listen(3000, () => {
    console.log("Servidor levantado en el puerto 3000");
});

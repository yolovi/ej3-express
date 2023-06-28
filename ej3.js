// Ejercicio 3
//TODO: faltan los siguientes puntos:
// Crear filtro por precio de producto
// Crear filtro que muestre los productos con un precio entre 50 y 250.
// Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto
// Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto



//1. IMPORTACIONES --------------------------------
const express = require('express');
const app = express();

const products = [
        { id: 1, name: 'Taza de Harry Potter' , price: 300},
        { id: 2, name: 'FIFA 22 PS5' , price: 1000},
        { id: 3, name: 'Figura Goku Super Saiyan' , price: 100},
        { id: 4,  name: 'Zelda Breath of the Wild' , price: 200},
        { id: 5,  name: 'Skin Valorant' , price: 120},
        { id: 6, name: 'Taza de Star Wars' , price: 220}
      ]

//2. MIDDLEWARES ----------------------------------
app.use(express.json())

//3. ENDPOINTS -----------------------------------

app.get("/products", (req, res) => {
    res.send({msg: "Product list", results: products})
});

app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length + 1, 
        name: req.body.name, 
        price: req.body.price
    }

    if(!req.body.name || !req.body.price){
        res.status(400).send({msg:"Please fill all inputs"})
    }else{
        products.push(newProduct)
        res.status(201).send({msg: "Product successfully created", result: newProduct})
    }
});

app.put("/products/id/:id", (req, res) => {
    const found = products.some(product => product.id == req.params.id);
  
    if (found) {
      products.forEach((product) => {
        if (product.id == req.params.id) {
          product.name = req.body.name ? req.body.name : product.name;
          product.price = req.body.price ? req.body.price : product.price;
          res.send({msg: `Product with id ${req.params.id} updated`, updated: product})
        }
      })

    } else {
      res.status(404).send({msg: `Product with id ${req.params.id} not found`});  
    }
  });


app.delete("/products/id/:id", (req, res) => {
    const productDeleted = products.filter((product) => product.id != req.params.id); // != un solo igual porque el id que se pasa como param en la barra nav/postman es un string
    if (productDeleted) { //simulamos que borramos el id filtrando y mostrando el resto excepto el pasado por param
       res.send({result: productDeleted}) 
    } else {
        res.status(404).send({msg:`Product with id ${req.params.id} not found`})
    }
});

// ejericicios filtro:

  app.get("/products/price/:price", (req, res) => {
    const found = products.some(product => product.price == req.params.price);
    if (found) {
        products.forEach((product) => {
            res.send(`Product's price ${req.params.price}, name ${product.name}`);
        })
    } else {
      res
        .status(404)
        .send({ msg: `Product with price ${req.params.price} not found` });
    }
  });

//   app.get("/products/price50250", (req, res) => {
//     const productBetween50And250 = products.filter((product) => product.price >= 50 && product.price <= 250 )
//     res.send({msg: "Products between 50 & 250", results: productBetween50And250})
//   });

app.get("/products/price50250", (req, res) => {

    products.forEach((product) => {
        if(product.price >= 50 && product.price <= 250 ){
            res.send(console.log(product))
            // res.send({msg: "Products between 50 & 250", results: product})
        }
    })    
  });


//4. LISTEN PUERTO -------------------------------
app.listen(8080, () => {
    console.log("Servidor levantado en el puerto 8080");
});



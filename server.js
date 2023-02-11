import express from "express";

const app = express()

//Instanciar constantes de rutas
const routerProducts = express.Router();
const routerCarts = express.Router();

//Rutas a endopoints

app.use('/productos', routerProducts);
app.use('/carrito', routerCarts)
routerProducts.use(express.urlencoded({    extended: true}));
routerCarts.use(express.urlencoded({    extended: true}));

app.use(express.static('public'))

//Endpoint de productos
const productos = []

routerProducts.get('/listar', (req, res) => {
    res.json(productos)
})

routerProducts.post('/guardar', (req, res) => {
    productos.push(req.body)
    res.json(req.body)
})

//Endpoint Carrito

const carrito = []

routerCarts.get('/listar', (req, res) => {
    res.json(carrito)
})

routerCarts.post('/guardar', (req, res) => {
    carrito.push(req.body)
    res.json(req.body)
})





//Configurar Servidor
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
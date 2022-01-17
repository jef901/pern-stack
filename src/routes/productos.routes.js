const { Router } = require("express");
const {
    obtenerProductos,
    obtenerUnProducto,
    creandoUnProducto,
    borrarProducto,
    modificarProducto
  } = require("../controllers/productos.controller");

//Routeo y url de las apis get post delete put

const router = Router();

router.get('/productos', obtenerProductos); //todos los productos

router.get('/producto/:id', obtenerUnProducto); //una producto en especifico pasamos id

router.post('/producto', creandoUnProducto);

router.delete('/producto/:id',borrarProducto);

router.put('/producto/:id', modificarProducto);

module.exports = router;
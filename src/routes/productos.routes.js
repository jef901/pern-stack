const { Router } = require("express");
const {
    obtenerProductos,
    obtenerUnProducto,
    creandoUnProducto,
    borrarProducto,
    modificarProducto
  } = require("../controllers/productos.controller");


const router = Router();

router.get('/productos', obtenerProductos);

router.get('/producto/:id', obtenerUnProducto);

router.post('/producto', creandoUnProducto);

router.delete('/producto/:id',borrarProducto);

router.put('/producto/:id', modificarProducto);

module.exports = router;
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

router.get('/producto/10', obtenerUnProducto);

router.post('/producto', creandoUnProducto);

router.delete('/producto',borrarProducto);

router.put('/producto', modificarProducto);

module.exports = router;
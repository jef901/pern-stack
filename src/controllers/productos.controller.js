const pool = require("../db");

const obtenerProductos = async (req, res, next) => {
    
    try {
      const todosProduct = await pool.query("SELECT * FROM productos");
      res.json(todosProduct.rows);
    } catch (error) {
      next(error);
    }
};

const obtenerUnProducto = async (req, res, next) => {
    res.send("Un productos")
  
    /*
    try {
      const allTasks = await pool.query("SELECT * FROM productos");
      res.json(allTasks.rows);
    } catch (error) {
      next(error);
    }
*/  
};

const creandoUnProducto = async (req, res)  => {
    const  {nombre,descripcion, precio,esfavorito} = req.body
    console.log(nombre,descripcion, precio,esfavorito);
   try {
    const nuevoProducto = await pool.query(
      "INSERT INTO productos (nombre, descripcion,precio,esfavorito) VALUES($1,$2,$3,$4) RETURNING *",[nombre, descripcion,precio,esfavorito]);
     
   } catch (error) {
     res.json({error: error.message})
   }
     
};

const borrarProducto = async (req,res) => {
  res.send("Borrando producto");
};

const modificarProducto = async(req,res) => {
    res.send("Modificar producto");
};



  module.exports = {
      obtenerProductos,
      obtenerUnProducto,
      creandoUnProducto,
      borrarProducto,
      modificarProducto
  }
  
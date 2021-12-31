const pool = require("../db");

const obtenerProductos = async (req, res, next) => {
    res.send("Lista de productos")
  
    /*
    try {
      const allTasks = await pool.query("SELECT * FROM productos");
      res.json(allTasks.rows);
    } catch (error) {
      next(error);
    }
*/  
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

const creandoUnProducto = async (req, res, next)  => {
    
    res.send("Creando un nuevo producto");
};

const borrarProducto = async (req,res,next) => {
    res.send("Eliminando una tarea nuevo productos");
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
  
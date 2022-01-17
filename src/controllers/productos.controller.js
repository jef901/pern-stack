const e = require("express");
const pool = require("../db");

//aqui estan los controladores o funciones que llaman las rutas
//se utiliza la funcion query del pool para lanzar los sql

const obtenerProductos = async (req, res, next) => {
   try {
      const todosProduct = await pool.query("SELECT * FROM productos order by id desc");
      res.json(todosProduct.rows); //la propiedad row del resultado del query trae un arreglo con los datos se tranforma en json
    } catch (error) {
      next(error);
    }
};

const obtenerUnProducto = async (req, res, next) => {
    try {
      const { id } = req.params; //aca viene el id del producto que le pasamos lo destructuramos
      const encontrado = await pool.query("SELECT * FROM productos WHERE id = $1", [id]); // consulta where id
  
      if (encontrado.rows.length === 0) //en rows se guardan los valores si tiene un valor 0 no lo encontro
        return res.status(404).json({ mensage: "Producto no encontrado" });  //retorno no encontrado
  
      res.json(encontrado.rows[0]);  //sino devuelve le producto encontrado
    } catch (error) {
      next(error);
    }
};

const creandoUnProducto = async (req, res,next)  => {
    const  {nombre,descripcion, precio,esfavorito} = req.body //se envia en el cuerpo del form los datos
    console.log(nombre,descripcion, precio,esfavorito);
   try {
    const nuevoProducto = await pool.query(
      "INSERT INTO productos (nombre, descripcion,precio,esfavorito) VALUES($1,$2,$3,$4) RETURNING *",[nombre, descripcion,precio,esfavorito]);
     
   } catch (error) {
     next(error); //se ejecuta la funcion next notificando el error
   }
     
};

const borrarProducto = async (req,res,next) => { //busca un producto y lo elimina
  try {
    const { id } = req.params; // le pasamos el id al delete
    const eliminado = await pool.query("DELETE FROM productos WHERE id = $1", [id]);

    if (eliminado.rowCount === 0)
      return res.status(404).json({ mensage: "Producto no eliminado" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const modificarProducto = async (req,res,next) => {
    const { id } = req.params; //necesitamos el id
    const { nombre, descripcion,precio,esfavorito } = req.body; //se pasan los datos en el body
    const modificado= await pool.query(
      "UPDATE productos SET nombre = $1, descripcion = $2, precio = $3,esfavorito= $4 WHERE id = $5",
      [nombre, descripcion, precio, esfavorito, id]
    );
    if (modificado.rows.length === 0)
    return res.status(404).json({ message: "Task not found" });

  return res.json(result.rows[0]);
 
     
}



  module.exports = {
      obtenerProductos,
      obtenerUnProducto,
      creandoUnProducto,
      borrarProducto,
      modificarProducto
  }
  
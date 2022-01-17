const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productosRouter = require("./routes/productos.routes");


const app = express();

// seteo
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());    //llamadas a middlewares en el mismo dominio
app.use(morgan("dev"));   //para ver las llamadas a la url
app.use(express.json()); // para que express reconozca los objetos json 
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(productosRouter);

// middleware manejo de errores
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));

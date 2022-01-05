const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productosRouter = require("./routes/productos.routes");


const app = express();

// seteo
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
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

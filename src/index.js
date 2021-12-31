const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const productosRoutes = require("./routes/productos.routes");


const app = express();
app.use(productosRoutes);
app.listen(3000);

console.log('server on port 3000')

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
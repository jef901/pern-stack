# CRUD PERN STACK 

## Backend que proporciona  api.
express servidor
nodemon para ver los cambios en desarrollo
morgan ver las peticiones a express
cors para llamadas entre mismas url
En index.js  el servidor
El backend se conecta a postgres con el modulo pg
la configuracion de la conexion a la base esta en db.js
Se crea un pool de  conexion
En la carpeta database se encuentra un arhivo db.sql con la definicion de la base
en productos.routes.js estan las rutas del crud
en productos.controllers.js los middlewares las funciones que llaman las rutas

## commando npm run dev o npm run start

# Front backend interfaz web en material UI

Usa material ui para estilizar
Fetch para enviar y recibir datos al backend
La navegacion se encuentra en el componente navbar.js
ProductForm.js es el componente formulario que da el alta y edita
ProductList.js es el componente listado de  productos usa UseEffect para cargar
datos cuando se llama al componente
La lista de productos tiene botones para editar y borrar.
Para editar el producto se crea la ruta editar y se pasa el id del producto
Cuando se da click en edit se usa el hook useNavigate para redirigirlo a editar
con el id del producto
Usamos UseEffect para ver los parametros que recibimos en la url si hay parametro
id en la url traemos el producto y se carga el formulario con los datos para editar


## comando npm start en el directorio cliente para inciar la app de React
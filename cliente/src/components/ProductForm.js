import  { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";



import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    } from "@mui/material";

  
 
export default function ProducForm() {

  const navigate = useNavigate();

  const params = useParams();

  const [editando, setEditando] = useState(false);

  /*se gurda todos los valores del producto en el estado */
  const [producto,setProducto] = useState({
    nombre: '',
    descripcion:'',
    precio: 0.0,
    esfavorito:false,
  })

  const cargarProducto = async (id) => {
    const res = await fetch("http://localhost:4000/producto/" + id);
    const data = await res.json();
    setProducto({ nombre: data.nombre, descripcion: data.descripcion,precio: data.precio });
    setEditando(true);
  };

  useEffect(() => {
    if(params.id) {
      cargarProducto(params.id)
    }
  }, [params.id]);
  {/* se envia el producto metodo POST atreves los metodos se resiven a traves del body en formato JSON */}
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      if (editando) {
        const res= await fetch(
          "http://localhost:4000/producto/" + params.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto),
          });
        await res.json();
      } else {
       const res = await fetch("http://localhost:4000/producto", 
       {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });
      await res.json();
    }
  navigate('/') 
  } catch (error) {
    console.error(error);
  }
  }
  const handleChange = (e) =>
      setProducto({ ...producto, [e.target.name]: e.target.value }); 
      {/* e.target.name el nombre del textfiel y e.target.value lo que se va escribieno */}

    return (
     <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
     >
            <Grid item xs={3}>
            <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}
        >
            <Typography variant="h5" textAlign="center" color="white">
              Nuevo Producto
             </Typography>
             <CardContent>
             <form onSubmit={handleSubmit}> {/*se llama a la funcion handlesubmit al enviar el formulario*/}
                     <TextField  variant="filled"
                          label="Nombre" 
                          name="nombre"
                          value={producto.nombre}
                          sx={{
                            display: "block",
                            margin: ".5rem 0",
                          }}
                          inputProps={{ style: { color: "white" } }}
                          InputLabelProps={{ style: { color: "white" } }}
                        onChange={handleChange} {/* se maneja el evento on change en cada textfield en la funcion handlechange */ }
                          />


                     
                     <TextField  variant="filled"
                          label="Descripcion"
                          name="descripcion"
                          value={producto.descripcion}
                          multiline
                          rows={4}
                          sx={{
                            display: "block",
                            margin: ".5rem 0",
                          }}
                          inputProps={{ style: { color: "white" } }}
                          InputLabelProps={{ style: { color: "white" } }}
                          onChange={handleChange}
                          />
                          
                          
                     <TextField  variant="filled"
                          label="Precio" 
                          name="precio"
                          value={producto.precio}
                          type="text"
                          sx={{
                            display: "block",
                            margin: ".5rem 0",
                          }}
                          inputProps={{ style: { color: "white" } }}
                          InputLabelProps={{ style: { color: "white" } }}
                          onChange={handleChange}
                          />
                      <Button  type="submit"
                        variant="contained"
                        color="primary">
                          Guardar
                      </Button>
                     
                 </form>
             
             </CardContent>
          </Card>
           
         </Grid>
       </Grid>
    )
}

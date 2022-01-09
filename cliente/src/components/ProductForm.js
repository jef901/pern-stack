import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    CircularProgress,
  } from "@mui/material";

  
 


export default function ProducForm() {

  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);

  const [producto,setProducto] = useState({
    nombre: '',
    descripcion:'',
    precio: 1,
    esfavorito:false,
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    
    const res = await fetch("http://localhost:4000/producto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
   const data = await res.json();
   console.log(data)

    setLoading(false);
    navigate("/")
      }
  const handleChange = (e) =>
      setProducto({ ...producto, [e.target.name]: e.target.value });


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
             <form onSubmit={handleSubmit}>
                     <TextField  variant="filled"
                          label="Nombre" 
                          name="nombre"
                          sx={{
                            display: "block",
                            margin: ".5rem 0",
                          }}
                          inputProps={{ style: { color: "white" } }}
                          InputLabelProps={{ style: { color: "white" } }}
                          onChange={handleChange}
                          />


                     
                     <TextField  variant="filled"
                          label="Descripcion"
                          name="descripcion"
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
                          type="currency"
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

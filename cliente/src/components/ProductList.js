import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



//UseEffect llama a la funcion cargar productos

export default function ProductList() {
    const [productos, setProductos] = useState([]);

    const navigate=useNavigate()
    
    const cargarProductos = async () => {
        const respuesta = await fetch("http://localhost:4000/productos");
        const data = await respuesta.json();
        setProductos(data);
      };

      
  const handleDelete = async (id) => {
    try {
    await fetch(`http://localhost:4000/producto/${id}`, {
        method: "DELETE",
      });
      setProductos(productos.filter((producto) => producto.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
        cargarProductos();
      }, []);
    return (
        <div>
           <h1>Lista de Productos</h1> 
      {productos.map((producto) => (
              <Card
              style={{
                marginBottom: ".7rem",
                backgroundColor: "#1e272e",
              }}
              key={producto.id}
              >
             <CardContent
               style={{
                display: "flex",
                justifyContent: "space-between",
              }}
             >
                 <div
                 style={{
                 color: "white",
                  }}
                 >
                  <Typography style={{ fontWeight: 600,fontSize: '1.5rem'  }}>{producto.nombre}</Typography>
                  <Typography>{producto.descripcion}</Typography>
                  <Typography>{producto.precio}</Typography>
                  </div>
                  <div>
                  <Button variant='contained' color='inherit' onClick={() => navigate(`/producto/${producto.id}/edit`)}>
                      Editar
                  </Button>
                  <Button variant='contained' color='warning'  onClick={() => handleDelete(producto.id)} style={{ marginLeft: ".5rem" }}>
                      Borrar
                  </Button>
                  </div>
                  </CardContent>
              </Card>
            
          ))}
    

      
        </div>
    )
}

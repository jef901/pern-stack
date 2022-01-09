import {Box, AppBar, Container,Toolbar,Typography,Button } from "@mui/material";

import { useNavigate, Link } from "react-router-dom";



export default function Navbar() {
    const navigate = useNavigate();
    return (
        <Box>
             <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: "none", color: '#eee'}}>
                           Productos
                        </Link>           
                      </Typography>
                      <Button
                         variant="contained"
                         color="primary"
                         onClick={() => navigate("/producto/nuevo")}
                         >
              Nuevo producto
            </Button>
                    </Toolbar>
              </Container>
            </AppBar>  
        </Box>
    )
}

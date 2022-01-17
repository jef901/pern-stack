import { BrowserRouter, Route, Routes } from "react-router-dom"; //se importa manejadores de ruteo
import ProductList from "./components/ProductList"; //traemos componentes
import ProductForm from "./components/ProductForm";
import Menu from "./components/Navbar";

import { Container } from "@mui/material";


//ruteamos y mostramos los componentes

function App() {
  return (
   <BrowserRouter>
   <Menu/>
   <Container>
   <Routes>
      <Route index path="/" element={ <ProductList/>} /> 
      <Route path="/producto/nuevo" element={<ProductForm></ProductForm>} />
      <Route path="/producto/:id/edit" element={<ProductForm />} />
   </Routes>
   </Container>
   </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Menu from "./components/Navbar";

import { Container } from "@mui/material";


function App() {
  return (
   <BrowserRouter>
   <Menu/>
   <Container>
   <Routes>
      <Route index path="/" element={ <ProductList/>} />
      <Route path="/producto/nuevo" element={<ProductForm></ProductForm>} />
   </Routes>
   </Container>
   </BrowserRouter>
  );
}

export default App;


import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from './CartContext/CartContext';
import Carrito from './components/carrito';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';


function App() {


  return (
    <div>
      
      <CartProvider>

        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path='/' element= {<ItemListContainer />} />
                <Route path='/item/:id' element= {<ItemDetailContainer /> } />
                <Route path="/categoriaId/:categoria" element={<ItemListContainer/>} />
                <Route path="/carrito" element={<Carrito/>} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/checkout' element={<Checkout />}  />
            </Routes>
            
        </BrowserRouter>

        </CartProvider>
    </div>
  );
}

export default App

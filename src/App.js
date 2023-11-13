import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/itemDetaliContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Carrito from './componentes/Carrito/carrito';
import Checkout from './componentes/Checkout/checkout';
import Contacto from './componentes/contacto';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contacto />}/>
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

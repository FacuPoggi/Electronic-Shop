import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/' element={<Navbar/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category'element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

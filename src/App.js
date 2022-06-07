import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import ProductsP from './pages/ProductsP';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import ProductP from './pages/ProductP';
import Cart from './pages/Cart';
import { createContext, useState } from 'react';
export const appContext = createContext()
function App() {
  // const[value,setalue]=useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* </BrowserRouter> */}
        <div className='main'>
          {/* <appContext.Provider value={val}> */}
            {/* <Cart /> */}
            {/* <BrowserRouter> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/:products' element={<ProductsP />} />
              <Route path='/item/:itemid' element={<ProductP />} />
            </Routes>
          {/* </appContext.Provider> */}
        </div>

      </BrowserRouter>
    </div>

  );
}

export default App;

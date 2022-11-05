import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {About, Error, Home, Products, SingleProduct} from './pages'

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}>Home</Route>
          <Route path='products' element={<Products></Products>}>Home</Route>
          <Route path='products/:{id}' element={<SingleProduct></SingleProduct>}>Home</Route>
          <Route path='*' element={<Error></Error>}>Error</Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App;

// import './App.css';
// import Sidebar from './components/Sidebar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'
// import { Products } from './pages/Products';
// import  AllProducts  from './pages/products/AllProducts';
// import  ShowProduct  from './pages/products/ShowProduct';
// import Customers from './pages/Customers';

// function App() {
//   return (
//     <Router>
//       <Sidebar />
//       <Routes>
//     <Route path='/' Component={Home}/>
//     <Route path='/products' Component={Products}/>
//     <Route path='/products/insightallproducts' Component={AllProducts}/>
//     <Route path='/products/product/:productname' Component={ShowProduct}/>
//     {/* <Route path='/products/addproduct' Component={ProductsAdd}/> */}
//     <Route path='/customers' Component={Customers}/>
//     </Routes>
//     </Router>
//   );
// }
  
// export default App;
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import { Products } from './pages/Products';
import AllProducts from './pages/products/AllProducts';
import ShowProduct from './pages/products/ShowProduct';
import Customers from './pages/Customers';
import ProductsMain from './pages/products/ProductsMain';
import AddProduct from './pages/products/AddProduct';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products" element={<ProductsMain />} />
        <Route path="/products/insightallproducts" element={<AllProducts />} />
        <Route path="/products/product/:productname" element={<ShowProduct />} />
        <Route path='/products/addproduct' element={<AddProduct />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </Router>
  );
}

export default App;
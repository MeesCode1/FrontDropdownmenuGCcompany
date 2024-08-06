import React from 'react'
import AddProduct from './AddProduct';
import AllProducts from './AllProducts';
// import ShowProduct from './ShowProduct';
import SearchProduct from './SearchProduct';
import './ProductsMain.css'

const ProductsMain = () => {
 
      return(
    
//   <div className='products-main'>
  <div className='products-main'>
            <h1>Products Directory</h1>
            <SearchProduct />
            <AddProduct />
            <AllProducts />
            
             {/* <ShowProduct productName="Tenderloin beef" /> */}
            
</div>
 );
}

export default ProductsMain

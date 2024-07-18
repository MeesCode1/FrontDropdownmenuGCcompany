import React from 'react'
import AddProduct from './AddProduct';
import AllProducts from './AllProducts';

const ProductsMain = () => {
 
      return(
    
//   <div className='products-main'>
  <div className='products-main'>
            <h1>Products Directory</h1>
            <AddProduct />
            <AllProducts />
            {/* <SearchProduct />
            <AllProductsList /> */}
            {/* <ShowProduct productName="Tenderloin beef" />
            <PostProduct /> */}        
</div>
 );
}

export default ProductsMain

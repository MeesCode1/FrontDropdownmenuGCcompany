import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  ShowProduct  from './products/ShowProduct';


export const Products = () => {
  return (
    <div className='products'>
      <h1>Products directory</h1>
    </div>
  );
};





export const AllProductsList = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
      axios.get('http://localhost:8080/products')
          .then(response => {
              setProducts(response.data);
          })
          .catch(error => {
              setError(error.message);
          });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
}

const handleProductClick = (productName) => {
    setSelectedProduct(productName);
};

  return (
    <div className='products'>
      <h1>Products</h1>
      <ul>
            {products.map(product => (
                <li key={product.id} className="product-item" onClick={() => handleProductClick(product.name)}>
                    <h2>{product.name}</h2>
                    <p><strong>Price:</strong> €{product.priceInEur.toFixed(2)}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                </li>
            ))}
        </ul>
        {selectedProduct && <ShowProduct productName={selectedProduct} />}
    </div>
  );
};






// export const ShowProduct = () => {

//   const [product, setProduct] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get(`http://localhost:8080/products/${productName}`)
//             .then(response => {
//                 setProduct(response.data);
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//     }, [productName]);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!product) {
//         return <div>Loading...</div>;
//     }

//     return (
//       <div className='products'>
//          <h1>{product.name}</h1>
//             <p>Category: {product.category}</p>
//             <p>Price: ${product.priceInEur}</p>
//             <p>Packed per unit: {product.packedPerUnit}</p>
//             <p>Instock: {product.inStock}</p>
//             <p>Description: {product.description}</p>
//       </div>
//     );
//   };







  export const ProductsAdd = () => {
    return (
      <div className='products'>
        <h1>Add new product</h1>
      </div>
    );
  };
  
// export default Products;
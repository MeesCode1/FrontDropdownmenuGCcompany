// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const AllProducts = () => {
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true); // Add this line

//     useEffect(() => {
//         axios.get('http://localhost:8080/products')
//             .then(response => {
//                 setProducts(response.data);
//                 setLoading(false); // Add this line
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setLoading(false); // Add this line
//             });
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Add this block
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
        
//         <div>
//             <h1>Products</h1>
//             {products.map(product => (
//                 <div className="products-preview" key={product.id}>
//                     <Link to={`/products/product/${product.name}`}>
//                         <h2>{product.name}</h2>
//                         <p>{product.description}</p>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AllProducts;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ShowProduct from './ShowProduct';
import ProductDetails from './ProductDetails';
import './AllProducts.css';

const AllProducts = () => {
 
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

    const handleChange = (event) => {
        setSelectedProduct(event.target.value);
    };
    // voor selection bar


    if (error) {
        return <div>Error: {error} </div>;
    }

    
    const handleProductClick = (productName) => {
        setSelectedProduct(selectedProduct === productName ? null : productName); 
    };  
    /////// Voor selection-bar

    
return (
    <div className="all-products">
        <h1>Products</h1>
        <ul>
            {products.map(product => (
                <li key={product.id} className="product-item">
                <div onClick={() => handleProductClick(product.name)}>
                    <h2>{product.name}</h2>
                    <p><strong>Price:</strong> €{product.priceInEur.toFixed(2)}</p>
                    <p><strong>Description:</strong> {product.shortDescription}</p>
                </div>
                {selectedProduct === product.name && <ProductDetails productName={product.name} />}
            </li>
            ))}
        </ul>
    </div>
);
}

export default AllProducts;
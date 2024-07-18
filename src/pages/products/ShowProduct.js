// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import { useParams } from 'react-router-dom';


// const ShowProduct = ({productName}) => {
//     const [product, setProduct] = useState(null);
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
//         <div>
//             <h1>{product.name}</h1>
//             <p>Category: {product.category}</p>
//             <p>Price: ${product.priceInEur}</p>
//             <p>Packed per unit: {product.packedPerUnit}</p>
//             <p>Instock: {product.inStock}</p>
//             <p>Description: {product.description}</p>
//         </div>
//     );
// }

// export default ShowProduct;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowProduct = () => {
    const { productname } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${productname}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [productname]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
              <h1>{product.name}</h1>
              <p>Category: {product.category}</p>
              <p>Price: ${product.priceInEur}</p>
              <p>Packed per unit: {product.packedPerUnit}</p>
              <p>Instock: {product.inStock}</p>
              <p>Description: {product.description}</p>
        </div>
    );
};

export default ShowProduct;
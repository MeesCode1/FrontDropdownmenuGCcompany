import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = ({ productName }) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${productName}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, [productName]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p><strong>~~~</strong><br /> {product.description}<br /> <strong>~~~</strong></p>
            <p><strong>Id:</strong> {product.id}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Packed per unit:</strong> {product.packedPerUnit}</p>
            <p><strong>Instock:</strong> {product.inStock}</p>
        </div>

    );
}

export default ProductDetails;
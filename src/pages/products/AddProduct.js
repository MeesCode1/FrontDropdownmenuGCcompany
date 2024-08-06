import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        priceInEur: '',
        packedPerUnit: '',
        inStock: '',
        shortDescription: '',
        description: ''
    });

    const [message, setMessage] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/products', product)
            .then(response => {
                setMessage('Product successfully added!');
                setProduct({
                    name: '',
                    category: '',
                    priceInEur: '',
                    packedPerUnit: '',
                    inStock: '',
                    shortDescription: '',
                    description: ''
                });
            })
            .catch(error => {
                setMessage('Error adding product: ' + error.message);
            });
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="add-product">
            <button onClick={toggleForm}>
                {showForm ? 'X' : 'Add New Product'}
            </button>
            {showForm && (
                <div>
                    <h2>Post New Product</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            placeholder="Category"
                            required
                        />
                        <input
                            type="number"
                            name="priceInEur"
                            value={product.priceInEur}
                            onChange={handleChange}
                            placeholder="Price in EUR"
                            required
                        />
                        <input
                            type="text"
                            name="packedPerUnit"
                            value={product.packedPerUnit}
                            onChange={handleChange}
                            placeholder="Packed Per Unit"
                            required
                        />
                        <input
                            type="number"
                            name="inStock"
                            value={product.inStock}
                            onChange={handleChange}
                            placeholder="In Stock"
                            required
                        />
                        <input
                            type="text"
                            name="shortDescription"
                            value={product.shortDescription}
                            onChange={handleChange}
                            placeholder="Short Description"
                            required
                        />
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            placeholder="Description"
                            required
                        ></textarea>
                        <button type="submit">Post Product</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            )}
        </div>
    );
};

export default AddProduct;
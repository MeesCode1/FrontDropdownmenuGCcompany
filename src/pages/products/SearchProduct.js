import React, { useState } from 'react';
import ShowProduct from './ShowProduct';
import './SearchProduct.css';

const SearchProduct = () => {
    const [productName, setProductName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        setSearchQuery(productName);
    };

    return (
        <div className="search-product">
            <h2>Zoek Product</h2>
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Productnaam"
            />
            <button onClick={handleSearch}>Zoeken</button>
            {searchQuery && <ShowProduct productName={searchQuery} />}
        </div>
    );
}

export default SearchProduct;
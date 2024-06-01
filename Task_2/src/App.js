import React, { useState, useEffect } from 'react';

const productData = [
  {
    id: 1,
    name: 'Smartphone',
    price: 399.99,
    rating: 4.8,
    discount: 15,
    availability: 'in stock',
  },
  {
    id: 2,
    name: 'Smart TV',
    price: 799.99,
    rating: 4.6,
    discount: 20,
    availability: 'limited stock',
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    price: 1299.99,
    rating: 4.4,
    discount: 10,
    availability: 'in stock',
  },
  {
    id: 4,
    name: 'Digital Camera',
    price: 699.99,
    rating: 4.5,
    discount: 25,
    availability: 'in stock',
  },
  {
    id: 5,
    name: 'Wireless Earphones',
    price: 149.99,
    rating: 4.3,
    discount: 30,
    availability: 'in stock',
  },
  {
    id: 6,
    name: 'Noise Cancelling Headphones',
    price: 199.99,
    rating: 4.6,
    discount: 15,
    availability: 'in stock',
  },
  {
    id: 7,
    name: 'Smartwatch',
    price: 249.99,
    rating: 4.7,
    discount: 10,
    availability: 'in stock',
  },
  {
    id: 8,
    name: 'Tablet',
    price: 499.99,
    rating: 4.5,
    discount: 20,
    availability: 'in stock',
  },
  {
    id: 9,
    name: 'Bluetooth Speaker',
    price: 129.99,
    rating: 4.3,
    discount: 15,
    availability: 'in stock',
  },
  {
    id: 10,
    name: 'Portable Charger',
    price: 49.99,
    rating: 4.6,
    discount: 5,
    availability: 'in stock',
  },
];

const App = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [numberToShow, setNumberToShow] = useState(3);
  const [inputValue, setInputValue] = useState(3);

  useEffect(() => {
    const sortedProducts = [...productData].sort((a, b) => b.rating - a.rating);
    setTopProducts(sortedProducts.slice(0, numberToShow));
  }, [numberToShow]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setNumberToShow(parseInt(inputValue, 10));
  };

  return (
    <div>
      <h1>Top N Products</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="numberToShow">
          Number of products to display:
          <input
            id="numberToShow"
            type="number"
            min="1"
            max={productData.length}
            value={inputValue}
            onChange={handleInputChange}
            style={{ marginLeft: '10px', width: '50px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px' }}>
          Show
        </button>
      </form>
      {topProducts.map((product) => (
        <div key={product.id} style={{ marginBottom: '20px' }}>
          <h3>{product.name}</h3>
          <p>Rating: {product.rating}</p>
          <p>Price: ${(product.price - (product.price * product.discount) / 100).toFixed(2)}{' '}
            <small>({product.discount}% off)</small>
          </p>
          <p>Availability: {product.availability}</p>
        </div>
      ))}
      <p>
        Showing the top {numberToShow} priced products.
      </p>
      {numberToShow < productData.length && (
        <div>
          <p>
            <button onClick={() => setNumberToShow(numberToShow === 3 ? 5 : 3)}>
              {numberToShow === 3 ? 'Show 5 Products' : 'Show 3 Products'}
            </button>
          </p>
          <p>
            <button onClick={() => setNumberToShow(productData.length)}>Show All Products</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
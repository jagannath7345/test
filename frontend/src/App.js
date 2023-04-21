import React, { useState, useEffect } from 'react';

const App = ({ location }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productIds = searchParams.getAll('productIds[]');
    fetch(`http://localhost:5000//api/compare?productIds=${productIds.join(',')}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, [location]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

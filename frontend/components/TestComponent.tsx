import React, { useState } from 'react';

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    console.log(item);
    setCart([...cart, item]);
  }

  return (
    <div className="app">
      <div className="flex space-x-2">
        <button className='border rounded-md' value="MacBook Pro" onClick={addItemToCart}> MacBook Pro</button>
        <button className='border rounded-md' value="iPhone XS" onClick={addItemToCart}>iPhone XS</button>
        <button className='border rounded-md' value="Gem" onClick={addItemToCart}> Gem</button>
        <button className='border rounded-md' value="Teddy Bear" onClick={addItemToCart}> Teddy Bear</button>
      </div>
      <div className="cart">
        Cart
        <ul>
          {cart.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;

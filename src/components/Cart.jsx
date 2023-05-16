import React, { useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  useEffect(() =>{
    console.log(cartItems);
  }, [cartItems])

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  return (
    <div>
      <h2>Cart</h2>
      {console.log(cartItems)}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
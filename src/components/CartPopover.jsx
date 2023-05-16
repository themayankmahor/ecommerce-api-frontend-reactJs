import React, { useState, useContext, useEffect } from 'react';
import { NavItem, NavLink, Popover, PopoverHeader, PopoverBody, Badge } from 'reactstrap';
import CartContext from '../context/CartContext';


const CartPopover = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  useEffect(() =>{
    console.log(cartItems);
  }, [cartItems])

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <NavItem>
      <NavLink href="#" id="Popover1" onClick={togglePopover}>
        Cart
        <Badge color="primary" pill>{cartItems.length}</Badge>
      </NavLink>
      <Popover flip placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={togglePopover}>
        <PopoverHeader>Your Cart</PopoverHeader>
        <PopoverBody>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.productId}>
                  {item.productName} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          )}
        </PopoverBody>
      </Popover>
    </NavItem>
  );
};

export default CartPopover;
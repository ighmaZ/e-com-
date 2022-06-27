import { useContext } from 'react';
import { useNavigate} from 'react-router-dom';

import { CartContext } from '../../contexts/Cart.context';
import Button from '../button/button';

import CartItem from '../cart-item/cart-item';

import {CartDropdownContainer, EmptyMessage , CartItems} from './cart-dropdown.styles'


const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () =>{

        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
          <CartItems>
            {cartItems.length ? (
              cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
            ) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
          </CartItems>
          <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
      );
    };
    
    export default CartDropdown;
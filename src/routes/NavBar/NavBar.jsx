 import { Fragment , useContext} from 'react'
 import {Outlet , Link } from 'react-router-dom'
 import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
 import CartIcon from '../../components/cart-icon/cart-icon'
 import CartDropdown from '../../components/dropdown/cart-dropdown'
 import { UserContext } from '../../contexts/user.context'
 import { CartContext } from '../../contexts/Cart.context'

 import { signOutUser } from '../../utilities/firebase/Firebase'

import { NavigationContainer , NavLinks , NavLink , LogoContainer } from './NavBar.styles'


const NavBar = () => {

  const { currentUser} = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);
 

  console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;

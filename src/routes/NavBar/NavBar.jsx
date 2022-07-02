 import { Fragment , useContext} from 'react'
 import {Outlet } from 'react-router-dom'
 import { useSelector } from 'react-redux';


 import CartIcon from '../../components/cart-icon/cart-icon'
 import CartDropdown from '../../components/dropdown/cart-dropdown'

 import { selectCurrentUser } from '../../store/user/user.selector';
 import { CartContext } from '../../contexts/Cart.context'


 
 import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
 import { signOutUser } from '../../utilities/firebase/Firebase'

import { NavigationContainer ,
   NavLinks ,
    NavLink ,
     LogoContainer
     } from './NavBar.styles'


     const NavBar = () => {

      const currentUser = useSelector(selectCurrentUser);
      const { isCartOpen } = useContext(CartContext);
 


      return (
        <Fragment>
          <NavigationContainer>
            <LogoContainer to='/'>
              <CrwnLogo className='logo' />
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

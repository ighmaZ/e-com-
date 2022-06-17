 import { Fragment , useContext} from 'react'
 import {Outlet , Link } from 'react-router-dom'
 import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
 import CartIcon from '../../components/cart-icon/cart-icon'
 import CartDropdown from '../../components/dropdown/cart-dropdown'
 import { UserContext } from '../../contexts/user.context'
 import { CartContext } from '../../contexts/Cart.context'

 import { signOutUser } from '../../utilities/firebase/Firebase'

 import  "./NavBar.scss"
const NavBar = () => {

  const { currentUser} = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);
 

  console.log(currentUser);
    return (
      <Fragment>
        <div className='NavBar'>
          <Link className='logo-container' to="/">
<CrwnLogo className='logo'/>
          </Link>
<div className='nav-links-container'>
  <Link className='nav-link' to ='/Shop'>
     SHOP
     </ Link>
     {
       currentUser ? (

        <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>)
        
        : ( <Link className='nav-link' to ='/auth'>
          Sign-in
          </ Link>
        
        )}
<CartIcon/>
       </div>
       {isCartOpen && <CartDropdown/>}
        </div>
      < Outlet />
      </Fragment>
    )
  }

  export default NavBar;
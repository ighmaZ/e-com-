 import { Fragment } from 'react'
 import {Outlet , Link } from 'react-router-dom'
 import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'

 import  "./NavBar.scss"
const NavBar = () => {
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
  <Link className='nav-link' to ='/auth'>
     Sign-in
     </ Link>

</div>

        </div>
      < Outlet />
      </Fragment>
    )
  }

  export default NavBar;
import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from '../context/StateProvider';
import {Link} from 'react-router-dom'

const Header = () => {

    // const [state,dispatch] = useStateValue()
    const [{cart},dispatch] = useStateValue()
  return (
      <div className='header'>
          {/* Header */}

          <Link to="/">
          <img className='headerLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> 
          </Link>

          <div className="headerSearch">
              <input className='headerSearchInput' type="text" />
              <SearchIcon className='headerSearchIcon' />
          </div>
          <div className="headerNav">
              <Link to="/login">
                  
              <div className='headerOption'>
                  <span className='headerOptionLineOne'>Hello Guest</span>
                  <span className='headerOptionLineTwo'>Sign in</span>
              </div>
            </Link>

              <div className='headerOption'>
                  <span className='headerOptionLineOne'>Returns</span>
                  <span className='headerOptionLineTwo'>& Orders</span>

                  
              </div>
              <div className='headerOption'>
                  <span className='headerOptionLineOne'>Your</span>
                  <span className='headerOptionLineTwo'>Prime</span>
              </div>

              <Link to="/checkout">
              <div className="headerOptionBasket">
                  <ShoppingBasket />
                      <span className='headerOptionLineTwo headerBasketCount'>{ cart.length}</span>
                  </div>
              </Link>
              
          </div>
      </div>
  )
}

export default Header
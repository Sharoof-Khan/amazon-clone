import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

const Header = () => {
  return (
      <div className='header'>
          {/* Header */}
          <img className='headerLogo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          <div className="headerSearch">
              <input className='headerSearchInput' type="text" />
              <SearchIcon className='headerSearchIcon' />
          </div>
          <div className="headerNav">
              <div className='headerOption'>
                  <span className='headerOptionLineOne'>Hello Guest</span>
                  <span className='headerOptionLineTwo'>Sign in</span>
              </div>
              <div className='headerOption'>
                  <span className='headerOptionLineOne'>Returns</span>
                  <span className='headerOptionLineTwo'>& Orders</span>

                  
              </div>
              <div className='headerOption'>
                  <span className='headerOptionLineOne'>Your</span>
                  <span className='headerOptionLineTwo'>Prime</span>
              </div>
              <div className="headerOptionBasket">
                  <ShoppingBasket />
                  <span className='headerOptionLineTwo headerBasketCount'>0</span>
              </div>
          </div>
      </div>
  )
}

export default Header
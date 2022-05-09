import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
      <div className='checkout'>
          {/* Checkout */}
          <div className="checkoutLeft">
              <img className='checkoutAdd'
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                  
                  alt="Add" />
              
              <div>
                  <h2 className="checkoutTitle">
                      Your Shopping Cart

                  </h2>
                  
                      {/* Cart Item */}
                      {/* Cart Item */}
                      {/* Cart Item */}
                      {/* Cart Item */}
                      {/* Cart Item */}
              </div>
              
          </div>

          <div className="checkoutRight">
              <Subtotal/>
              {/* <h2>The Subtotal will go here</h2> */}
          </div>
      </div>
  )
}

export default Checkout
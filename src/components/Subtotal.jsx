import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';


const Subtotal = () => {

    const [{ cart }, dispathch] = useStateValue()
    
    console.log(cart,'crt');
  return (
      <div className='subtotal'>
          {/* Subtotal */}
          <CurrencyFormat
              renderText={(value) => (
                  <>
                      <p>
                          {/* SubTotal (0 items): */}
                          SubTotal ({ cart.length} items)
                          <strong>0</strong>
                      </p>

                      <small className='subtotalGift'>
                          <input type="checkbox" /> This order contains a gift
                      </small>
                  
                  </>
              )}
              decimalScale={2}
              value={0}
              displayType={'text'}
              thousandSeparator={true}
              prefix = {"₹"}
          />

          <button>Proceed to Checkout</button>
          
    </div>
  )
}

export default Subtotal
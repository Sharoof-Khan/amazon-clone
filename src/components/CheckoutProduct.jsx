import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../context/StateProvider'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
     const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = ()=>{

        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id,
        })
    }
  return (
      <div className='checkoutProduct'>
          {/* CheckoutProduct */}
          <img className='checkoutProductImg' src={image} alt="Item Img" />
          <div className="checkoutProductInfo">
              <p className="checkoutProductTitle">
                  {title}
              </p>
              <p className="checkoutProductPrice">
                  <small>₹</small>
                  <strong>{ price}</strong>
              </p>
              <div className="checkoutProductRating">
                    {Array(rating).fill().map((_, i) => (
                      <StarIcon  />
                      
                  ))}
              </div>
              <button onClick={removeFromCart}>Remove from Cart</button>
          </div>
      </div>
  )
}

export default CheckoutProduct
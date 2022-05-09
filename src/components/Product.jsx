import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import './Product.css'

const Product = ({title,image,price,rating}) => {
  return (
      <div className='product'>
          {/* Product */}

          {/* <input type="quantity" /> */}
          <div className="productInfo">
              {/* <p>The Lean Startup </p> */}
              <p>{title} </p>
              <p className='productPrice'>
                  <small> ₹ </small>
                  <strong>{ price}</strong>
              </p>

              <div className="productRating">

                  {Array(rating).fill().map((_, i) => (
                      <StarIcon  />
                      
                  ))}
                  {/* <StarIcon /> */}
                  {/* <StarIcon /> */}
                  {/* <StarHalfIcon /> */}

              </div>
          </div>

          {/* <img src="https://images-na.ssl-images-amazom.com/images/I/5lZymoq7UnL._AC_SY400_.jpg" alt="" /> */}

          <img src={image} alt="The Lean Startup img" />

          <button>Add to Cart</button>




      </div>
  )
}

export default Product
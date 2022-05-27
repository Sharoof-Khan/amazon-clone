import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import './Product.css'
import { useStateValue } from '../context/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
    // console.log(id,'chek');

    // const [state,dispatch] = useStateValue()
    const [{ cart }, dispatch] = useStateValue()
    
    // console.log('Cart is here ==> ==> =>',cart);

    const addToCart = () => {

        dispatch({
            type: "ADD_TO_CART",
            item: {
            /*id: id,
            title:title*/
                id,
                title,
                image,
                price,
                rating
            },
        })

         
    }
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

          <button onClick={ addToCart}>Add to Cart</button>




      </div>
  )
}

export default Product
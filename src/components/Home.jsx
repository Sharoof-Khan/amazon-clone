import { nanoid } from 'nanoid';
import React from 'react'
import './Home.css';
import Product from './Product';
const Home = () => {
  return (
    <div className='home'>
      {/* Home */}
      <div className="homeContainer">
        <img className='homeImage' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Prime Page" />
        <div className="homeRow">
          < Product
            id = {nanoid(3)}
            title='The Lean Startup: How Constant Invovation Creates  Radically Successful Businesses Paperback' price='1499' image="https://m.media-amazon.com/images/I/51T-sMqSMiL.jpg" rating={4} />
          {/* Product */}
          <Product  id = {nanoid(3)} title = 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater,Dough Hook and Whisk, 5 Litre Glass Bowl' price = {4999} rating = {4} image = "https://m.media-amazon.com/images/I/31JjPYpiD2L._AC_SR320,320_.jpg" />
        </div>
        <div className="homeRow">
          {/* Product */}
          {/* Product */}
          {/* Product */}
          <Product id={nanoid(3)}
            title="Samsung LC49RG9ØSSUXEN 49' Curved LED Gaming Monitor"
            price={12999}
            rating={3}
            image="https://m.media-amazon.com/images/I/41lRuJTbSqL._AC_SR160,160_.jpg" />
          <Product id={nanoid(3)}
            title='Amazon Echo (3rd generation)|Smart speaker with Alexa, Charcoal Fabric'
            price={7999}
            rating={5}
            image="https://media.croma.com/image/upload/v1605253127/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/8878237417502.png" />
          <Product id={nanoid(3)}
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) Silver (4th Generation)'
            price={12999}
            rating={4}
            image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1619272147/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/234301_rrbfhe.png/mxw_600,f_auto" />


        </div>
        <div className="homeRow">
          {/* Product */}
          <Product
            
            title="Samsung LC49RG9ØSSUXEN 49' Curved LED Gaming Monitor Pro"
            price={23499}
            rating = {5}
          image= "https://images.samsung.com/is/image/samsung/in-gaming-monitor-c49g95tssw-lc49g95tsswxxl-frontwhite-335279681?$730_584_PNG$"
          />


        </div>
      </div>
    </div>
  )
}

export default Home
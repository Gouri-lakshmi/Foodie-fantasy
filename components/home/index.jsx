import React from 'react'
import SliderBlock from './SliderBlock'
import { ProductCard } from './ProductCard';
import BannerBlock from './BannerBlock';
import ProductCardBlock2 from './ProductCardBlock2';
import Offerblock from './Offerblock';
import NavBar from './NavBar';

const HomePage= () => {
  return (
    <div>  
      <NavBar/>
    <SliderBlock/>
    <ProductCardBlock2/>
    <BannerBlock/>
    <ProductCard/>
    <Offerblock/>
    </div>
  )    
}

export default HomePage;
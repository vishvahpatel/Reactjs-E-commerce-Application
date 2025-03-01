import React, { useEffect } from 'react'
import Categories from '../components/Categories'
import  CarouselSlider  from '../components/CarouselSlider'
import Cards from '../components/Cards'
import BestSellers from '../components/BestSellers'
import { useParams } from 'react-router-dom'



const Home = () => {
  const { id } = useParams();
  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },)
  return (
    <div>
    {
      id ? 
      (<Cards/>):
      (
        <>
      <Categories/>
      <CarouselSlider/>
      <BestSellers/>
      <br/><br/>
      </>
      )
    }
      
    </div>
  )
}

export default Home
import React from 'react'
import grocery from '../assets/grocery.png'
import fashion from '../assets/fashion.png'
import beautycare from '../assets/beautycare.png'
import appliances from '../assets/appliances.png'
import mobile from '../assets/mobile.png'
import { NavLink } from 'react-router-dom'



const Categories = () => {
    
  return (
    <div className='bg-gray-100 mt-20 h-35 shadow-md'>
        <ul className='flex justify-around ' >
            <li>
            <NavLink to='/home/grocery'  >
                <div id='grocery'>
                    <img src={grocery} className='h-25 w-25 '/>
                    <p className='ml-5'>Grocery</p>
                </div> 
            </NavLink>
            </li>
            <li>
            <NavLink to='/home/fashion'>
                <div id='fashion'>
                    <img src={fashion} className='h-25 w-30'/>
                    <p className='ml-5'>Fashion</p>
                </div>
            </NavLink> 
            </li>
            <li>
            <NavLink to='/home/beautyproducts'>
                <div id='beautyproducts'>
                    <img src={beautycare} className='h-25 w-30'/>
                    <p className='ml-5'>Beauty care</p>
                </div>
            </NavLink>
            </li>
            <li>
            <NavLink to='/home/appliances'>
                <div id='appliances'>
                    <img src={appliances} className='h-25 w-30 pt-2'/>
                    <p className='ml-5'>Appliances</p>
                </div>
            </NavLink>
            </li>
            <li>
            <NavLink to='/home/mobiles'>
                <div id='mobile'>
                    <img src={mobile} className='h-25 w-30 pt-2'/>
                    <p className='ml-8'>Mobile</p>
                </div>
            </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Categories
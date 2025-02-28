import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {GoHeartFill } from "react-icons/go";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ecommerce from '../assets/ecommerce.png'
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Avatar from 'react-avatar';
import { RxAvatar } from "react-icons/rx";
import { logoutUser } from '../redux/Slice/logUserSlice';

const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  const currentUser = useSelector((state) => state.loguser.currentUser);
  const [search,setSearch] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isDropDowmVisible,setDropDownVisible] = useState(false)

  const handleMouseHover = ()=>{
    setDropDownVisible(true)
  }
  const handleMouseleave = ()=>{
    setDropDownVisible(false)
  }

  const handleLogout = ()=>{
    dispatch(logoutUser())
    navigate('/')
  }
  
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/home/product?q=${search}`);
    }
  };
  const totalItems = cart.reduce((acc, curr) => acc + (Number(curr.quantity) || 1), 0);

 
  return (
   <div className='relative z-40'>
    <nav className=' flex bg-gray-100 shadow-md h-13 justify-around fixed w-full top-0 left-0 '>
    <NavLink to='/home'>
       <img src={ecommerce} className='h-12 w-18'/>
    </NavLink>
      
        <div>
          <ul className='flex text-lg mt-2 space-x-10'>
          <li className='flex'>

          <input type="search" placeholder="Search..." className="h-8 w-40 inset-shadow-2xl rounded-md bg-gray-50 pl-6 pr-4 py-2"value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())} onKeyDown={handleSearch}/>
          <div className="flex items-center pointer-events-none absolute  text-black">
              <IoIosSearch className="mt-2 h-5 w-5 ml-1 cursor-pointer" />
          </div>
          </li>
         
          <NavLink to='/home'>
              <li className='cursor-pointer'>Home</li>
          </NavLink>

          <NavLink to='/cart'>
              <li className='relative'>
              <FaShoppingCart className='text-2xl cursor-pointer mt-1'/>
              {
                totalItems > 0 && 
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white">{totalItems }</span>
              }
              </li> 
          </NavLink>

          <NavLink to='/wishlist'>
              <li><GoHeartFill  className='h-6 w-6 mt-1 cursor-pointer text-red-600'/></li>
          </NavLink>
            
          
              <li className='flex'>
              <div >
              {currentUser ? (
                  <Avatar name={`${currentUser.email}`} 
                  size="30" round={true} />):
                  (<RxAvatar className="w-10 h-10 text-gray-600" />)}
                </div>
            
  
              {/* <NavLink to='/'> */}

              <div onClick={handleMouseHover} onMouseLeave={handleMouseleave}>
                <button className='flex cursor-pointer  h-9 rounded-md p-1  w-22' >
                  Login  
                  {
                    isDropDowmVisible? (<FaChevronUp  className='ml-1 mt-2 text-sm'/> ):(<FaChevronDown  className='ml-1 mt-2 text-sm'/> )
                  }
                  </button>
                  {isDropDowmVisible && 
                    <div className=' ml-4 bg-white pl-2 h-20 w-18 text-violet-600 text-md font-serif mt-2 pt-2 flex flex-col'>
                      <Link to='/home/profile' className='hover:underline cursor-pointer'>Profile</Link>
                      <p className='hover:underline cursor-pointer' onClick={handleLogout}>Logout</p> 
                    </div>}
              </div>
              {/* </NavLink> */}
                  </li>

          </ul>
        </div>
        

        
    </nav>
    </div>
  )
}

export default Navbar
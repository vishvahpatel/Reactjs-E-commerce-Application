import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import main from '../assets/main.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setCurrentUser } from '../redux/Slice/logUserSlice'
import usefetchCartData from '../usefetchCartData'
import { setCart } from '../redux/Slice/CartSlice'
import { setlist } from '../redux/Slice/WishlistSlice'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import logo from '../assets/ecommerce.png'
import { IoEye,IoEyeOff } from "react-icons/io5";


const Login = () => {
  const {userloginVerify,fetchCartWishlist,fetchuserDataToLogin} = usefetchCartData()
  const [captchaInput,setCaptchaInput]=useState("")
  const [isCaptchaValid,setIsCaptchaValid] = useState(false)
  const [showPassword, setShowPassword] = useState(false); 
 const currentUser = useSelector((state) => state.loguser.currentUser)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   useEffect(()=>{
    loadCaptchaEnginge(4); 
   },[])


     const {
            register,
            handleSubmit,
            formState:{ errors },
        }= useForm()

        useEffect(()=>{
          fetchuserDataToLogin()
        },[])


        const onLoginSubmit = async (data) => {
          if (!data.email || !data.password || !captchaInput) {
            toast.error("Please fill in all fields!");
            return;
          }
        
          const existingUser = userloginVerify.find((user) => user.email === data.email);
        
          if (!existingUser) {
            toast.error("Email not registered!");
          } else if (existingUser.password !== data.password) {
            toast.error("Password does not match!");
          } else {
            if (validateCaptcha(captchaInput)) {
              setIsCaptchaValid(true);
              dispatch(setCurrentUser(existingUser));
              toast.success("Login Successful!");
        
              const { cart, wishlist } = await fetchCartWishlist(existingUser.id);
              dispatch(setCart(cart));
              dispatch(setlist(wishlist));
        
              navigate("/home",{ replace: true });
            } else {
              setIsCaptchaValid(false);
              toast.error("Invalid Captcha! Please try again.");
            }
          }
        };
        
     
  return (
    <div className='bg-gray-100 h-screen w-full  flex '>
     
     <div className=' h-screen w-screen  shadow-xl rounded-lg flex '>
        
     <img src={main} className='h-screen w-160 '/>
        <form onSubmit={handleSubmit(onLoginSubmit)} noValidate className="flex flex-col justify-center items-center ml-35" >
        <img src={logo} className='w-25  h-20'/>
         <h1 className='  text-3xl font-semibold text-violet-800'>Welcome Back</h1>
         <p className='mt-0 mb-5 text-gray-400 text-sm'>Login to your account</p>
            <div className=' mt-5  ml-8 italic relative'>
                 <input  placeholder='Email@gmail.com' {...register('email')}
                className=' rounded-sm h-12 w-68 bg-gray-200 pl-2 pr-10'/>   
                {errors.email && <p  className='text-red-500 text-xs absolute '>{errors.email.message}</p>}  
            </div>
    
            <div className='mt-6  ml-8 italic relative'>
                <input type={showPassword ? "text" : "password"} placeholder='password'{...register("password")}
                className='rounded-sm bg-gray-200 h-12 w-68 pl-2 '/>
                {errors.password && <p className='text-red-500 text-xs absolute' >{errors.password.message}</p>}

                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500" >
              {showPassword ? <IoEyeOff size={20} className='text-gray-400' /> : <IoEye size={20} className='text-gray-400'/>}
            </button>
         
            </div>
            
            
            
            <div className='space-x-10 mt-6  ml-8 flex  items-center'>
                <LoadCanvasTemplate reloadText="Regenerate"/>
                <input type="text" className="bg-gray-200 h-12 w-30 pl-2 rounded" placeholder="Captcha" value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)} required/>
                    
            </div>
            <div className='flex'>
            <input type='submit' value={"Login"}  className='h-9 mt-5 mb-5 w-70 ml-8 rounded bg-violet-400 cursor-pointer text-white ' />
            </div>
            
            <Link to='/register' className='cursor-text text-gray-400 text-sm'>Don't have an account? <span className='text-violet-800 cursor-pointer underline text-md '>Sign Up</span></Link>
        </form>
       
        </div>
    </div>
    
  )
}

export default Login
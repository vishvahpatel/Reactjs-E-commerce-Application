import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import main from '../assets/main.jpg'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { setCurrentUser } from '../redux/Slice/logUserSlice'
import usefetchCartData from '../usefetchCartData'
import { setCart } from '../redux/Slice/CartSlice'
import { setlist } from '../redux/Slice/WishlistSlice'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import logo from '../assets/ecommerce.png'


const Login = () => {
  const {userloginVerify,fetchCartWishlist,fetchuserDataToLogin} = usefetchCartData()
  const [captchaInput,setCaptchaInput]=useState("")
  const [isCaptchaValid,setIsCaptchaValid] = useState(false)
  
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
          const existingUser = userloginVerify.find((user) => user.email === data.email && user.password === data.password);
        console.log("existing user detail",existingUser)
          console.log("func call")
          if (existingUser) {
            console.log("login call")
            if (validateCaptcha(captchaInput)) {
              setIsCaptchaValid(true);
              dispatch(setCurrentUser(existingUser));
              toast.success('Login Successful!');
      
              console.log("Fetching cart...");
              const { cart, wishlist } = await fetchCartWishlist(existingUser.id);
              console.log("Cart fetch success", cart);
              dispatch(setCart(cart));
              dispatch(setlist(wishlist))
      
              navigate('/home');
            } else {
              setIsCaptchaValid(false);
              toast.error("Invalid Captcha! Please try again.");
            }
  
  
             
          } else {
              toast.warning("Don't have an account? Register first");
          }
      };
    
     
  return (
    <div className='bg-gray-100 h-screen w-full  flex '>
     
     <div className=' h-screen w-screen  shadow-xl rounded-lg flex '>
        
     <img src={main} className='h-screen w-160 '/>
        <form onSubmit={handleSubmit(onLoginSubmit)} className="flex flex-col justify-center items-center ml-35" >
        <img src={logo} className='w-25  h-20'/>
         <h1 className='  text-3xl font-semibold text-violet-800'>Welcome Back</h1>
         <p className='mt-0 mb-5 text-gray-400 text-sm'>Login to your account</p>
            <div className='space-x-10 mt-5  ml-8 italic'>
                 <input  placeholder='Email@gmail.com' {...register('email', {
                required:{ value:true,
                 pattern: /^[a-z][0-9]+@[a-z]+[a-z]{3,}$/, message: "email is required"}})}
                className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>   
                {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}  
            </div>
    
            <div className='space-x-10 mt-5  ml-8 italic'>
                <input placeholder='password'{...register("password", {
                required: true,
                pattern: { value: /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/, message: "password is required" },
                minLength: { value: 8,message: "password is required"}})}
                className='rounded-sm bg-gray-200 h-12 w-68 pl-2 '/>
                {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</p>}
            </div>
            
            
            
            <div className='space-x-10 mt-5  ml-8 flex  items-center'>
                <LoadCanvasTemplate reloadText="Regenerate"/>
                <input type="text" className="bg-gray-200 h-12 w-30 pl-2 rounded" placeholder="Captcha" value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)} required/>
                    
            </div>
            <div className='flex'>
            {/* <button type="button" onClick={handleCaptchaValidation} className="bg-blue-500 text-white p-2 rounded mt-5 mr-4 ml-6 w-38 h-9  cursor-pointer">
                  Validate Captcha
                </button> */}
            <input type='submit' value={"Login"}  className='h-9 mt-5 mb-5 w-70 ml-8 rounded bg-violet-400 cursor-pointer text-white ' />
            </div>
            
            <Link to='/register' className='cursor-text text-gray-400 text-sm'>Don't have an account? <span className='text-violet-800 cursor-pointer underline text-md '>Sign Up</span></Link>
        </form>
       
        </div>
    </div>
    
  )
}

export default Login
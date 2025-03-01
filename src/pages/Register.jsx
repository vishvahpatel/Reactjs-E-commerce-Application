import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import main from '../assets/main.jpg'
import { toast } from 'react-toastify'
import { useDispatch} from 'react-redux'
import { addUser } from '../redux/Slice/logUserSlice'
import usefetchCartData from '../usefetchCartData'
import logo from '../assets/ecommerce.png'
import { IoEye,IoEyeOff } from "react-icons/io5";

const Register = () => {
  const {fetchaddUserData}= usefetchCartData()
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate()
  const dispatch= useDispatch()
    const {
        register,
        handleSubmit,
        formState:{ errors },
        watch
    }= useForm()

    const onSubmit = (data) => {
      console.log('function call')
      fetchaddUserData(data);
      dispatch(addUser(data));
      toast.success('User registered successfully!');
      navigate('/'); 
    };

    const password = watch('password');
  return (
    <div className='bg-gray-100 h-screen w-full flex'>
    <div className=' h-screen w-screen  shadow-xl rounded-lg flex '>
    <img src={main} className='h-screen w-160'/>

    <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center ml-35">
    <img src={logo} className='w-25  h-20'/>
             <h1 className='  text-3xl font-semibold text-violet-800'>Welcome to E-commerce</h1>
             <p className='mt-0 mb-1 text-gray-400 text-sm'>Register for your new account</p>
    <div className='mt-3 italic relative '>
       <input placeholder='FirstName'  {...register('firstname' , {
            required: { value: true, message: "first name is required" },
            minLength: { value: 3, message: "enter min 3 character" } })}
                className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'
            />
            {errors.firstname && <span className='text-red-500 text-xs absolute w-30 mt-3 ml-1'>{errors.firstname.message}</span>}
    </div>
    <div className=' mt-3  italic relative'>
      <input  placeholder='LastName' {...register('lastname', {
        required:{ value:true, message:"last name is required"},
        minLength:{ value: 3, message: "enter min 3 character"}})}
        className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>
        {errors.lastname && <span className='text-red-500 text-xs absolute w-30 mt-3 ml-1'>{errors.lastname.message}</span>}  
    </div>

    <div className=' mt-3  italic relative'>
       <input placeholder='MobileNo'{...register("phoneNumber", {
            required: "mobile number is required",
            pattern:{value: /^[789][0-9]{9}$/,message: "Enter 10-digit phone number",}})}
            className=' rounded-sm h-12 w-68 bg-gray-200 pl-2' />
            {errors.phoneNumber && <span className='text-red-500 text-xs absolute w-30 mt-3 ml-1 '>{errors.phoneNumber.message}</span>}
    </div>
    <div className=' mt-3  italic relative'>
        <input placeholder='Email@gmail.com' {...register('email', {
        required:{ value:true, message:"email is required" ,
        pattern: /^[a-z][0-9]+@[a-z]+[a-z]{3,}$/, message: "enter correct email"}})}
        className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>   
        {errors.email && <span className='text-red-500 text-xs absolute w-30 mt-3 ml-1 '>{errors.email.type === "required" ? "Email is required": "Enter a valid email"}</span>}  
         
    </div>
    
    <div className=' mt-3  italic relative'>
         <input type={showPassword ? "text" : "password"} placeholder='Password' {...register("password", {
            required: "password is required",
            pattern:{value:  /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/, message: "password must contain at least one number, one symbol, starts with capital alphabet" },
            minLength: { value: 8, message: "password must be min 8 characters" }})}
            className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>
        {errors.password && <span className='text-red-500 text-xs absolute w-46 mt-3 ml-1'>{errors.password.message}</span>}
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500" >
                      {showPassword ? <IoEyeOff size={20} className='text-gray-400'/> : <IoEye size={20} className='text-gray-400'/>} </button>
    </div>
    <div className=' mt-3  italic relative'>  
      <input type={showPassword ? "text" : "password"}  placeholder='Confirm Password'{...register("confirmpassword", {
            required: "confirm password is required",
            validate: (value) => value === password || "enter same confirm password" })}
            className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>
        {errors.confirmpassword && <span className='text-red-500 text-xs absolute w-30 mt-3 ml-1'>{errors.confirmpassword.message}</span>}
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500" >
                      {showPassword ? <IoEyeOff size={20} className='text-gray-400'/> : <IoEye size={20} className='text-gray-400'/>}</button>
      </div>
      <input type='submit' value={"Register"} className='h-8 rounded-xs mt-2 cursor-pointer w-22 bg-violet-400 text-white '/>
          <Link to='/' className='cursor-text text-gray-400 text-sm'>Already have an account? <span className='text-violet-800 cursor-pointer underline text-md '>Login</span></Link>
    </form>
    </div>
    </div>
  )
}

export default Register
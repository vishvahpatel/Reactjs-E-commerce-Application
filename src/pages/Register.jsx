import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import main from '../assets/main.jpg'
import { toast } from 'react-toastify'
import { useDispatch} from 'react-redux'
import { addUser } from '../redux/Slice/logUserSlice'
import usefetchCartData from '../usefetchCartData'
import logo from '../assets/ecommerce.png'

const Register = () => {
  const {fetchaddUserData}= usefetchCartData()

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
    <div className='bg-gray-100 h-screen w-screen flex'>
    <img src={main} className='h-screen w-160'/>

    <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center ml-35">
    <img src={logo} className='w-25  h-20'/>
             <h1 className='  text-3xl font-semibold text-violet-800'>Welcome to E-commerce</h1>
             <p className='mt-0 mb-1 text-gray-400 text-sm'>Register for your new account</p>
    <div className='mt-3  '>
       <input placeholder='FirstName'  {...register('firstname' , {
            required: { value: true, message: "first name is required" },
            minLength: { value: 3, message: "enter min 3 character" } })}
                className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'
            />
            {errors.firstname && <span style={{ color: 'red', fontSize: '12px' }}>{errors.firstname.message}</span>}
    </div>
    <div className='space-x-10 mt-3  italic'>
      <input  placeholder='LastName' {...register('lastname', {
        required:{ value:true, message:"last name is required"},
        minLength:{ value: 3, message: "enter min 3 character"}})}
        className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>
          
        {errors.lastname && <span style={{ color: 'red', fontSize: '12px' }}>{errors.lastname.message}</span>}    
    </div>

    <div className='space-x-10 mt-3  italic'>
       <input placeholder='MobileNo'{...register("phoneNumber", {
            required: true,
            pattern: {value: /^[789][0-9]{9}$/,message: "Enter 10-digit phone number",}})}
            className=' rounded-sm h-12 w-68 bg-gray-200 pl-2' />
            {errors.phoneNumber && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phoneNumber.message}</span>}
    </div>
    <div className='space-x-10 mt-3  italic'>
        <input placeholder='Email@gmail.com' {...register('email', {
        required:{ value:true, message:"email is required" ,
        pattern: /^[a-z][0-9]+@[a-z]+[a-z]{3,}$/, message: "enter correct email"}})}
        className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>   
        {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</span>}  
         
    </div>
    
    <div className='space-x-10 mt-3  italic'>
         <input placeholder='Password' {...register("password", {
            required: true,
            pattern: { value: /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/, message: "password must contain at least one number, one symbol, starts with capital alphabet" },
            minLength: { value: 8, message: "password must be min 8 characters" }})}
            className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>
        {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</span>}
    </div>
    <div className='space-x-10 mt-3  italic'>  
      <input  placeholder='Confirm Password'{...register("confirmpassword", {
            required: true,
            validate: (value) => value === password || "enter same confirm password" })}
            className=' rounded-sm h-12 w-68 bg-gray-200 pl-2'/>
        {errors.confirmpassword && <span style={{ color: 'red', fontSize: '12px' }}>{errors.confirmpassword.message}</span>}
      </div>
      <input type='submit' value={"Register"} className='h-8 rounded-xs mt-2 cursor-pointer w-22 bg-violet-400 text-white '/>
          <Link to='/' className='cursor-text text-gray-400 text-sm'>Already have an account? <span className='text-violet-800 cursor-pointer underline text-md '>Login</span></Link>
    </form>
    </div>
  )
}

export default Register
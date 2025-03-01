import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from "../redux/Slice/logUserSlice";
import usefetchCartData from '../usefetchCartData';
import { FaCamera } from "react-icons/fa";
import { toast } from 'react-toastify';

const Profile = () => {
    const currentUser = useSelector((state) => state.loguser.currentUser);
    const { updateUserProfile } = usefetchCartData();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState(currentUser || {});
    const [selectedFile, setSelectedFile] = useState(null);
    const [isEditing, setIsEditing] = useState(false); 
    const fileInputRef = useRef(null); 

    useEffect(() => {
        setUserData(currentUser);
    }, [currentUser]);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const imageUrl = URL.createObjectURL(file);
            setUserData({ ...userData, profileImage: imageUrl });
        }
    };

    const handleSaveChanges = async () => {
        if (!isEditing) {
            setIsEditing(true); 
            return;
        }

        if (!userData.id) return;

        const response = await updateUserProfile(userData.id, userData);
        if (response) {
            dispatch(setCurrentUser(response));
            toast.success("Profile updated successfully!");
            setIsEditing(false); 
        } else {
            toast.error("Failed to update profile. Try again.");
        }
    };

    const triggerFileInput = () => {
        if(isEditing){
            fileInputRef.current.click();
        }
        
    };

    return (
        <div className="mt-20 items-center justify-center flex flex-col">
            <div className='flex place-items-center relative'>
                <img src={userData.profileImage || null} alt="." 
                    className="h-32 w-32 bg-gray-200 rounded-full object-cover z-0" />
                <FaCamera  
                    className='h-6 w-6 absolute left-24 top-24 text-gray-400 cursor-pointer' 
                    onClick={triggerFileInput} 
                />
                <h1 className='mt-3 text-3xl font-semibold text-violet-800 ml-2'>
                    {userData.firstname} {userData.lastname}
                </h1>
            </div>
            
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden"/>

            <div className='flex flex-col mt-4 font-serif'>
                <div className='grid grid-cols-2 gap-4'>
                    <p className='text-md text-gray-400'>First Name:</p>
                    <p className='text-md text-gray-400'>Last Name:</p> 
                    <input 
                        type="text" 
                        name="firstname"
                        value={userData.firstname || ''} 
                        onChange={handleChange}
                        className={`pl-2 text-xl shadow-md h-12 w-45 mr-10 rounded-md 
                            ${isEditing ? 'text-black bg-gray-100' : 'text-gray-600 bg-gray-200 cursor-default shadow-none'}`} 
                        readOnly={!isEditing} 
                    />
                    <input 
                        type="text" 
                        name="lastname"
                        value={userData.lastname || ''} 
                        onChange={handleChange}
                        className={`pl-2 text-xl shadow-md h-12 w-45 rounded-md 
                            ${isEditing ? 'text-black bg-gray-100' : 'text-gray-600 bg-gray-200 cursor-default shadow-none'}`} 
                        readOnly={!isEditing} 
                    />
                </div>
                <div className='mt-5 grid grid-cols-2 gap-4'>
                    <p className='text-md text-gray-400'>Password:</p> 
                    <p className='text-md text-gray-400'>Mobile No:</p>
                    <input 
                        type="text" 
                        name="password"
                        value={userData.password || ''} 
                        onChange={handleChange}
                        className={`pl-2 text-xl shadow-md h-12 w-45 mr-10 rounded-md 
                            ${isEditing ? 'text-black bg-gray-100' : 'text-gray-600 cursor-default bg-gray-200 shadow-none'}`} 
                        readOnly={!isEditing} 
                    />
                    <input 
                        type="tel" 
                        name="phoneNumber"
                        value={userData.phoneNumber || ''} 
                        onChange={handleChange}
                        className={`pl-2 text-xl shadow-md h-12 w-45 rounded-md 
                            ${isEditing ? 'text-black bg-gray-100' : 'text-gray-600 cursor-default bg-gray-200 shadow-none'}`} 
                        readOnly={!isEditing} 
                    />
                </div>
                <div className='mt-5'>
                    <p className='text-md text-gray-400 mb-4'>Email:</p> 
                    <input 
                        type="email" 
                        name="email"
                        value={userData.email || ''} 
                        onChange={handleChange}
                        className={`pl-2 text-xl shadow-md h-12 w-105 rounded-md 
                            ${isEditing ? 'text-black bg-gray-100' : 'text-gray-600 cursor-default bg-gray-200 shadow-none'}`} 
                        readOnly={!isEditing} 
                    />
                </div>
            </div>
            
            <button 
                className='h-10 w-50 mt-5 bg-violet-400 text-white shadow-lg cursor-pointer rounded-md hover:bg-violet-300'
                onClick={handleSaveChanges}
            >
                {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
        </div>
    );
};

export default Profile;

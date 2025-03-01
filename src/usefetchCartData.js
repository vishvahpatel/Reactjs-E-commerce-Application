import  { useEffect, useState } from 'react'

const usefetchCartData = () => {

    const [loading,setLoading] = useState(false);
    const [posts,setPost]=useState([]);
    const [bestsellerspost,setbestsellerspost]=useState([])
    const [addUserData,setAddUserData] = useState([]);
    const [userloginVerify,setuserLoginVerify] = useState([]);
    const [search,setSearch] = useState("")
    const [singlePost,setSinglePost] = useState({});
    const [bestsellerSinglePost,setBestsellerSinglePost] = useState({});
    const [profileData,setProfileData] = useState([])
    
// fetch all products
    async function fetchCartData(){
        setLoading(true)

        try {
            const res = await fetch("http://localhost:3000/products");
            const output = await res.json()
            setPost(output)
        } catch (error) {
            console.log("error occure")
            setPost([])
        }
        setLoading(false)
    }


// fetch single product
    async function fetchSingleCardDesc(productId){
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:3000/products/${productId}`)
            const output = await res.json()
            setSinglePost(output)
        } catch (error) {
            console.log("error in fetching single card detail")
            setSinglePost([])
        }
        setLoading(false)
    }
    // fetch bestseller card data
    async function fetchsinglebestsellercard(productId){
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:3000/bestsellers/${productId}`)
            const output = await res.json()
            setBestsellerSinglePost(output)
        } catch (error) {
            console.log("error in fetching single card detail")
            setBestsellerSinglePost([])
        }
        setLoading(false)
    }
    
//fetch bestsellers data
async function fetchBestsellers(){
     setLoading(true)
     try {
        const res = await fetch("http://localhost:3000/bestsellers")
        const output = await res.json()
        setbestsellerspost(output)
     } catch (error) {
        setbestsellerspost([])
     }
     setLoading(false)
}


//adduser in jsonserver
     async function fetchaddUserData(userdata){
        try {
            const res = await fetch("http://localhost:3000/userProfile",{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify({...userdata,cart: [],wishlist: []})

            });
            setAddUserData(res);

        } catch (error) {
            console.log("error in adding data")
            setAddUserData([])
        }
     }


//fetch data for login verification
     async function fetchuserDataToLogin(){
        try {
            const res = await fetch("http://localhost:3000/userProfile")
            const output = await res.json()
            setuserLoginVerify(output)
        } catch (error) {
            console.log("error in fetching data to verify")
            setuserLoginVerify([])
        }
     }

// update user detail 

async function updateUserProfile(userId, updatedData) {
    try {
        const res = await fetch(`http://localhost:3000/userProfile/${userId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        });
        const updatedUser = await res.json();
        setProfileData(updatedUser); 
        console.log("updated user data",updatedUser)
        return updatedUser;
    } catch (error) {
        console.error("Error updating user profile:", error);
        return null;
    }
}




// fetch cart and wishlist

async function fetchCartWishlist(userid){
    try {
        const res = await fetch(`http://localhost:3000/userProfile/${userid}`)
        const user = await res.json()
        return { cart: user.cart, wishlist: user.wishlist };
    } catch (error) {
        console.log("error in cart fetching")
        return { cart:[], wishlist: [] };
    }
}

// add to cart 
 async function addToCart(userId,product){
    try {
        const result = await fetch(`http://localhost:3000/userProfile/${userId}`);
        console.log("result of error",result)
        const userData = await result.json();

        const updatedCart = [...(userData.cart || []), product];

        const res = await fetch(`http://localhost:3000/userProfile/${userId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart:updatedCart })
        });
        const updatedUser = await res.json();
        console.log("Cart Updated after add:", updatedUser.cart);
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
};

// remove from cart
async function removeFromCart(userId, productId) {
    try {
        const res = await fetch(`http://localhost:3000/userProfile/${userId}`);
        const user = await res.json();
        console.log("calling filter cart--",user)
        const updatedCart = user.cart.filter(item => item.id !== productId);


        await fetch(`http://localhost:3000/userProfile/${userId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart: updatedCart })
        });

        console.log("Cart Updated after remove:", updatedCart);
    } catch (error) {
        console.error("Error removing from cart:", error);
    }
};


//update cart items quantity
async function updateCartItemQuantity(userId, productId, newQuantity) {
    try {
        const res = await fetch(`http://localhost:3000/userProfile/${userId}`);
        const user = await res.json();

        const updatedCart = user.cart.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );

        await fetch(`http://localhost:3000/userProfile/${userId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart: updatedCart })
        });

        console.log("Cart Updated after quantity change:", updatedCart);
    } catch (error) {
        console.error("Error updating cart quantity:", error);
    }
}



//add to wishlist
    async function fetchaddTolist(userId,product){

        try {
            const result = await fetch(`http://localhost:3000/userProfile/${userId}`)
            const userdata = await result.json()
    
            const updatedlist = [...(userdata.wishlist || []),product]
            const res = await fetch(`http://localhost:3000/userProfile/${userId}`,{
                method:'PATCH',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({wishlist:updatedlist})
            })
    
            const updatedUser = res.json()
        } catch (error) {
            console.log("error in adding wishling",error)
        }
    }

    //remove items from wishlist
    async function fetchremoveFromlist(userId, productId){
        try {
            const result = await fetch(`http://localhost:3000/userProfile/${userId}`)
            const userlist = await result.json()

            const updatedlist = userlist.wishlist.filter(item => item.id !== productId)

            await fetch(`http://localhost:3000/userProfile/${userId}`,{
                method:'PATCH',
                header:{"Content/Type":"application/json"},
                body:JSON.stringify({wishlist:updatedlist})
            })
        } catch (error) {
            console.log("error in adding wishlist",error)
        }
    }

    return {loading,updateUserProfile,updateCartItemQuantity,profileData,search,setSearch,fetchCartData,fetchsinglebestsellercard,bestsellerSinglePost,singlePost,setSinglePost,fetchSingleCardDesc,bestsellerspost,posts,addUserData,fetchaddUserData,userloginVerify,fetchCartWishlist,addToCart,removeFromCart,fetchaddTolist,fetchremoveFromlist,fetchBestsellers,fetchuserDataToLogin}
  
}

export default usefetchCartData
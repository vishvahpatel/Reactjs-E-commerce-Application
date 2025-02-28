// import React from 'react'
// import CardDescription from '../components/CardDescription'
// import usefetchCartData from '../usefetchCartData';
// import { useParams } from 'react-router-dom';
// import Spinner from '../components/Spinner';

// const DescriptionPage = () => {
//        const {singlePost,loading}= usefetchCartData();
//         const { id } = useParams();

       
//   return (
//     <div>
//         {
//             loading ? <Spinner/> : 
//             singlePost ? 
//             (<div>
//                 {
//                singlePost.map((product) => (
//                      <CardDescription key = {product.id} product={product} />
//                     ))
//                     }
//             </div>):
//             (<div>
//                 No Data Found
//             </div>)
//         }
//     </div>
//     // <CardDescription key = {product.id} product={product} />
//   )
// }

// export default DescriptionPage
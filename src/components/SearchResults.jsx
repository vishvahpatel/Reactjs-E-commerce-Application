import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import usefetchCartData from "../usefetchCartData";
import { Spinner } from "@material-tailwind/react";

const SearchResults = () => {
  const { posts, loading,fetchCartData } = usefetchCartData();
  const location = useLocation();

  useEffect(()=>{
    fetchCartData()
  },[])

  const searchQuery = location.search.split("=")[1]?.toLowerCase() || "";
  const filteredProducts = posts.filter((post) => post.title.toLowerCase().includes(searchQuery) || 
  post.description.toLowerCase().includes(searchQuery)||
  post.category.toLowerCase().includes(searchQuery));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
      {loading ? (
        <p className="text-center text-lg"><Spinner /></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((post) => <Card key={post.id} post={post} />)
          ) : (
            <p className="text-gray-500 text-center">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;

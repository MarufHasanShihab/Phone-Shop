import { useEffect } from "react";
import { useState } from "react";
import FavoritesCard from "./FavoritesCard/FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItem) {
      setFavorites(favoritesItem)
    } else {
      setNotFound("No Item");
    }
  }, []);
  const handleRemoveAllFavorites = ()=>{
    localStorage.clear()
     setFavorites([])
     setNotFound("Not Items")
  }
  return (
    <div>
      <div>
        {favorites.length > 0 && (
         <button className="flex mt-6 mx-auto" onClick={handleRemoveAllFavorites}> <a
         className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group f"
       >
         <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
         <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
           <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
           <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
         </span>
         <span className="relative text-white">Delete All Favorites</span>
       </a></button>
        )}
      </div>
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center text-3xl font-bold">
          {notFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {isShow ? favorites.map((phone) => (
              <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
            )): favorites.slice(0,4).map((phone) => (
                <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
              ))}
          </div>
          {favorites.length > 4 && <button className="flex my-8 mx-auto" onClick={()=>setIsShow(!isShow)}> <a
         className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group f"
       >
         <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
         <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
           <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
           <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
         </span>
         <span className="relative text-white">{isShow ? "Show Less" : "Show More"}</span>
       </a></button>}
        </div>
      )}
    </div>
  );
};

export default Favorites;

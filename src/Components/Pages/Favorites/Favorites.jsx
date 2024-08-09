import { useEffect } from "react";
import { useState } from "react";


const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    useEffect(()=>{
        const favoritesItem = JSON.parse(localStorage.getItem('favorites'))
        setFavorites(favoritesItem)
    },[])
    console.log(favorites)
    return (
        <div>
            
        </div>
    );
};

export default Favorites;
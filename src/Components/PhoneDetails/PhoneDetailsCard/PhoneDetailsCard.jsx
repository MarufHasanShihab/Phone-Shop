/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const PhoneDetailsCard = ({ phone }) => {
  const { id, brand_name, phone_name, image } = phone || {};
  const allFavoritesItem = [];
  const handleAddFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log(favorites)
    if (!favorites) {
      allFavoritesItem.push(phone);
      localStorage.setItem("favorites", JSON.stringify(allFavoritesItem));
      Swal.fire({
        title: "Good job!",
        text: "Add Favorite Succesfully!",
        icon: "success"
      });
    }else{
      const isExist = favorites.find(item => item.id === id)
      if(!isExist){
        allFavoritesItem.push(...favorites, phone)
        localStorage.setItem("favorites", JSON.stringify(allFavoritesItem))
        Swal.fire({
          title: "Good job!",
          text: "Add Favorite Succesfully!",
          icon: "success"
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "No Dublicate...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
     
    }
  };

  return (
    <div>
      <div className=" h-[80vh] flex justify-center items-center">
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={image}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              {brand_name}
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {phone_name}
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              explicabo.
            </p>
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 bg-gray-300 mt-3"
                type="button"
                onClick={handleAddFavorites}
              >
                Add to favorites
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

PhoneDetailsCard.propTypes = {
  phone: PropTypes.object,
};

export default PhoneDetailsCard;

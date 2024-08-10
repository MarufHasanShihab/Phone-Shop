import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const { id, image, brand_name, phone_name, price, rating } = phone || {};
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 md:w-80">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border m-0 p-0 rounded-xl ">
          <img src={image} alt="card-image" className="object-cover w-64 " />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {brand_name}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {phone_name}
              </p>
            </div>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            illo?
          </p>
          <Rating  initialRating={rating} readonly />
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`} state={phone_name}>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-gray-300 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              see details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Phone.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default Phone;

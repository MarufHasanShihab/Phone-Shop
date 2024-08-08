import Phone from "../Phone/Phone";
import PropTypes from 'prop-types'; // ES6



const Phones = ({phones}) => {
    console.log(phones)
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold py-8">All Categories Phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
            </div>
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.object.isRequired
}

export default Phones;
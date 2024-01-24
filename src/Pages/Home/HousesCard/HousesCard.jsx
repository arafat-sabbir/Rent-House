import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HousesCard = ({ item }) => {
    return (
        <>
            <div className="max-w-lg w-[512px] p-4 shadow-[0_0_50px_#EBE8E8] rounded-sm dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <p className="mb-0 capitalize dark:text-gray-100 font-medium">{item.city}</p>
                    </div>
                    <Link className="text-main font-semibold" to={`/houseDetail/${item._id}`}>View Detail</Link>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={item.roomPicture} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex justify-between items-center text-md">
                            <span className="font-medium">Available Till : {item.availabilityDate}</span>
                            <p>Rent Per Month : {item.rentPerMonth}</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium dark:text-violet-400">{item.name}</h3>
                            <p className="font-medium dark:text-gray-400">Room Size : {item.roomSize} sqf</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium">No. Of Bathrooms : {item.bathrooms}</p>
                            <p className="font-medium">No Of Bedrooms : {item.bedrooms}</p>
                        </div>
                        <div className="justify-between items-baseline flex">
                            <p className="font-medium">{item.address}</p>
                            <p className="font-medium">Phone : {item.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HousesCard;

HousesCard.propTypes={
    item:PropTypes.node
}
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../Utility/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useUserData from "../../../Utility/Hooks/useUserData";
import toast from "react-hot-toast";

const HouseDetail = () => {
    const { id } = useParams()
    const {userEmail,role} = useUserData()
    const navigate = useNavigate()
    const axios = useAxios()
    console.log(id);
    const { data:houseData, isLoading, isPending } = useQuery({
        queryKey: ['roomData'],
        queryFn: async () => {
            const res = await axios.get(`/getRoomDetail/${id}`)
            return res.data;
        }
    })
    if(isLoading||isPending){
        return <p>loading</p>
    }
    console.log(houseData);
    const handleBooking = () => {
      const toastId=  toast.loading("Booking House")
        if(role==="House Owner"){
            return toast.error("Owner Can't Book Rooms",{id:toastId})
        }else{
            const houseDetail={
                houseData,
                userEmail
            }
            axios.post('/addBookings',houseDetail)
            .then(res=>{
                if(res.data.insertedId){
                    toast.success("House Booked SuccessFully",{id:toastId})
                }
            })
        }
    }
    const handleNotSignIN=()=>{
        toast.error("Please Sign In To Book Room")
        navigate('/signIn')
    }
    return (
        <div>


            <div className="flex lg:flex-row flex-col justify-between mt-28 container mx-auto">
                <div className=" w-full lg:m-4  flex flex-col lg:flex-row justify-center pb-4">
                    <div className="flex flex-col lg:flex-row items-center lg:gap-10">
                        <div className=" lg:w-full">
                            <img
                                src={houseData?.roomPicture}
                                alt=""
                                className="rounded-sm lg:h-96 lg:w-[700px] w-[90vw] mx-auto"
                            />
                        </div>
                        <div className="md:w-2/3 lg:m-4 mt-4 lg:mt-auto w-[90vw] mx-auto">
                            <div className="flex text-gray-500 text-sm m-2">
                                <div className="text-sm flex items-center">
                                    {/* <FaLocationDot className="text-xl text-main"></FaLocationDot> */}
                                    <h3 className="ml-1 ">{houseData?.city}</h3>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h3 className="font-bold  text-3xl text-gray-600 m-2">
                                    {houseData.name}
                                </h3>
                            </div>
                            <h3 className="m-2 font-semibold">
                                Status : {houseData.availabilityDate}
                            </h3>
                            <div className="text-sm text-gray-600 mt-4 m-2">
                                <h3 className="text-xl font-semibold">
                                    Price Range :
                                    <span className="text-main">
                                        ${houseData.rentPerMonth}
                                    </span>
                                </h3>
                            </div>
                            <div className="divider divider-error lg:w-auto w-11/12"></div>
                            <div className="flex cursor-pointer ">
                                <div className="m-2">
                                    {/* <Link to={`/agentProfile/${agentEmail}`}>
                                        <img
                                            src={agentImage}
                                            alt=""
                                            className=" rounded-full w-12 h-12"
                                        />
                                    </Link> */}
                                </div>
                                <div className="grid m-1">
                                    <div className="font-bold text-sm hover:text-gray-600 mt-2">
                                        {houseData.bathrooms}
                                    </div>
                                    <div className=" text-sm hover:text-gray-700 font-medium mb-4">
                                        Seller Agent
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10 mt-4">
                                <div className="border-r-2 pr-8 border-r-main">
                                    {
                                        userEmail? <button
                                            onClick={() => handleBooking(houseData._id)}
                                            className="relative px-8 py-2 rounded-full  bg-[#072730] text-white  isolation-auto z-10 border  border-dashed border-main 
                              before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0  before:bg-main font-medium hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                                        >
                                            Book Now
                                        </button> : <button
                                            onClick={handleNotSignIN}
                                            className="relative px-8 py-2 rounded-full  bg-[#072730] text-white  isolation-auto z-10 border  border-dashed border-main 
                                before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0  before:bg-main font-medium hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                                        >
                                            Add To WishList
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDetail;
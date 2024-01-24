import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Utility/Hooks/useAxios";
import useUserData from "../../../Utility/Hooks/useUserData";
import { MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyBookedHouse = () => {
    const axios = useAxios()
    const {userEmail} = useUserData()
    const {data:myBookings,isLoading,isPending,refetch}= useQuery({
        queryKey:['myBookings'],
        queryFn:async()=>{
            const res = await axios.get(`/myBookings?email=${userEmail}`)
            return res.data;
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`/deleteBooking/${id}`).then((res) => {
              console.log(res.data);
              if (res.data.deletedCount > 0) {
                toast.success("Booking Deleted")
                refetch()
              }
            });
          }
        });
      };
if(isLoading||isPending){
    return <p>Loading</p>
}
    return (
       <div className="">
        <h3 className="text-3xl font-semibold text-center my-20">Your Booked Houses</h3>
         <div className="grid grid-cols-2 gap-10   justify-center items-center justify-items-center">
           {
            myBookings.map(item=><div key={item.houseData._id} className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
            <div
                className="w-full h-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                style={{ backgroundImage: `url(${item.houseData.roomPicture})` }}
            ></div>
            <div className="w-80 -mt-16 overflow-hidden bg-[#F2FFE9] rounded-lg shadow-lg md:w-[450px] dark:bg-gray-800">
                <div className="flex justify-between px-4 items-center ">
                    <h3 className="py-2 font-bold text-sm tracking-wide text-center text-gray-800 uppercase dark:text-white">
                        {item?.houseData.name}
                    </h3>
                    <h1 className="font-semibold">Available Till : {item.houseData.availabilityDate}</h1>
                </div>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                        Rent Per Month : ${item.houseData.
                            rentPerMonth}
                    </span>
                    <button className="flex items-center">
                        <MdOutlineVerified className="text-green-500 text-xl"></MdOutlineVerified> <span className="ml-[2px] font-semibold">{item.houseData.city}</span>
                    </button>
                </div>
                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200 flex items-center">
                        <span className="ml-1">Size: {item.houseData.roomSize} sqf</span>
                    </span>
                    <Link to={`/houseDetail/${item.houseData._id}`}>
                        <button className="relative px-2 text-sm py-1  bg-[#072730] text-white  isolation-auto z-10 border rounded-full border-dashed border-main 
                        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-main hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                            View  Detail
                        </button>
                    </Link>
                </div>
                   <div className="flex  justify-center items-center">
                   <button onClick={()=>handleDelete(item._id)} className="cursor-pointer flex gap-2 items-center text-red-500"><AiOutlineDelete size={24}/>Delete</button>
                   </div>
            </div>
        </div>)
           }
        </div>
       </div>
    );
};

export default MyBookedHouse;
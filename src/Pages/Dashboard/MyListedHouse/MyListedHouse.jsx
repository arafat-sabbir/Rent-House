import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Utility/Hooks/useAxios";
import useUserData from "../../../Utility/Hooks/useUserData";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyListedHouse = () => {
    const axios = useAxios()
    const user = useUserData()
    console.log(user.userEmail,);
    const { data: myListedHouse, isLoading,refetch } = useQuery({
        queryKey: ['myListedHouse'],
        queryFn: async () => {
            const res = await axios.get(`/getMyListedHouse?email=${user.userEmail}`)
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
            axios.delete(`/deleteRoom/${id}`).then((res) => {
              console.log(res.data);
              if (res.data.deletedCount > 0) {
                toast.success("Room Deleted")
                refetch()
              }
            });
          }
        });
      };
    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-3xl font-semibold text-center tracking-wider my-16">Your Listed House</h1>
            <div className="border overflow-x-scroll lg:overflow-x-hidden rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 ">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                House Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                City
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                Address
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                Bedrooms
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                Bathrooms
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                Room Size
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                Room Picture
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                Rent Per Month
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                Availability Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 ">
                        {!isLoading &&
                            myListedHouse?.map((item) => (
                                <tr key={item?._id}>
                                    <td className="p-4">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                        {item?.city}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                        {item?.address}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                        {item?.bedrooms}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                        {item?.bathrooms}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                        {item?.roomSize}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                        <img src={item.roomPicture} className="rounded-full w-10 h-10" alt="" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                       ${item?.rentPerMonth}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                       ${item?.availabilityDate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                      <div className="flex gap-4">
                                      <Link to={`/dashboard/updateRoom/${item._id}`} className="cursor-pointer text-green-800"><CiEdit size={24}/></Link>
                                       <button onClick={()=>handleDelete(item._id)} className="cursor-pointer text-red-500"><AiOutlineDelete size={24}/></button>
                                      </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListedHouse;
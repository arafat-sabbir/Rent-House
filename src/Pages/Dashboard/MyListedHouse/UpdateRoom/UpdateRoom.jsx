import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../Utility/Hooks/useAxios";
import toast from "react-hot-toast";
import { useState } from "react";

const UpdateRoom = () => {
    const [phoneNumberError] = useState("");
    const { id } = useParams()
    const navigate = useNavigate()
    const axios = useAxios()
    const { data: roomData, isLoading, isPending } = useQuery({
        queryKey: ['roomData'],
        queryFn: async () => {
            const res = await axios.get(`/getRoomDetail/${id}`)
            return res.data;
        }
    })
    console.log(roomData);
    if (isLoading || isPending) {
        return <p>loading</p>
    }
    const handleUpdateHouse = (e) => {
        e.preventDefault();
        console.log(e.target);
        const toastId = toast.loading("Updating Room")
        const form = e.target;
        const houseData = {
            name: form.name.value,
            city: form.city.value,
            address: form.address.value,
            bedrooms: parseInt(form.bedrooms.value),
            bathrooms: parseInt(form.bathrooms.value),
            roomSize: parseInt(form.roomSize.value),
            roomPicture: form.roomPicture.value,
            rentPerMonth: parseInt(form.rentPerMonth.value),
            availabilityDate: form.availabilityDate.value,
            phoneNumber: form.phone.value,
            roomDescription: form.description.value
        }
        console.log(houseData);
        axios.patch(`/updateHouse/${id}`, houseData)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    toast.success("Room Updated successfully", { id: toastId });
                    return navigate('/dashboard/myListedHouse')
                }
            })
            .catch((error) => {
                toast.error(error)
            })

    };
    const { name, city, address, bedrooms, bathrooms, rentPerMonth, roomSize, availabilityDate, roomPicture, phoneNumber, roomDescription } = roomData;
    return (
        <form onSubmit={handleUpdateHouse}
            className="flex lg:w-1/2 w-[90vw] mt-10 space-y-6 mx-auto p-16  flex-col justify-center shadow-[0_0_50px_#EDEDED]"
        >
            <h3 className=" font-semibold text-3xl text-center">Update House Detail</h3>
            <div className="flex gap-3">
                {/* Name */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Name</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={name}
                        name="name"
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
                {/* City */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">City</span>
                    </label>
                    <input
                        name="city"
                        type="text"
                        defaultValue={city}
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
            </div>
            <div className="flex  gap-3 ">
                {/* Address */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Address</span>
                    </label>
                    <input
                        name="address"
                        type="text"
                        defaultValue={address}
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
                {/* Bedrooms */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Bedrooms</span>
                    </label>
                    <input
                        name="bedrooms"
                        type="number"
                        defaultValue={bedrooms}
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
            </div>
            <div className="flex  gap-3 ">
                {/* Bathrooms */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Bathrooms</span>
                    </label>
                    <input
                        defaultValue={bathrooms}
                        type="number"
                        name="bathrooms"
                        placeholder="Number of Bathrooms"
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
                {/* Room Size */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Room Size</span>
                    </label>
                    <input
                        name="roomSize"
                        type="number"
                        defaultValue={roomSize}
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
            </div>
            <div className="flex  gap-3 ">
                {/* Picture */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Room Picture</span>
                    </label>
                    <input
                        name="roomPicture"
                        type="text"
                        defaultValue={roomPicture}
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
                {/* Rent Per Month */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Rent Per Month </span>
                    </label>
                    <input
                        name="rentPerMonth"
                        type="number"
                        defaultValue={rentPerMonth}
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
            </div>
            <div className="flex  gap-3 ">
                {/* Availability date */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Availability date</span>
                    </label>
                    <input
                        name="availabilityDate"
                        type="date"
                        defaultValue={availabilityDate}
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                </div>
                {/* Phone Number */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-main">Phone Number</span>
                    </label>
                    <input
                        name="phone"
                        type="text"
                        defaultValue={phoneNumber}
                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
                        required
                    />
                    {phoneNumberError && (
                        <p className="text-red-500 mt-2 text-sm" role="alert">
                            {phoneNumberError}
                        </p>
                    )}
                </div>
            </div>
            <textarea
                className="border border-gray-500 focus:border-main focus:outline-none placeholder:font-medium rounded-sm p-2"
                name="description"
                cols="10"
                rows="4"
                defaultValue={roomDescription}
                required
            ></textarea>
            <button
                type="submit"
                className="cursor-pointer mx-auto hover:scale-95 transition duration-300 font-semibold   border  px-12 border-gray-500 focus:border-main focus:outline-none placeholder:font-medium py-2"
            >
                Update Room
            </button>
        </form>
    );
};

export default UpdateRoom;
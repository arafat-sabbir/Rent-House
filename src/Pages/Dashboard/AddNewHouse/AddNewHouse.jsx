import { Helmet } from "react-helmet";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUserData from "../../../Utility/Hooks/useUserData";
import useAxios from "../../../Utility/Hooks/useAxios";
import AddRoomForm from "../../../Utility/Forms/AddRoomForm";

const AddNewHouse = () => {
  const axios = useAxios();
  const [phoneNumberError, setPhoneNumberError] = useState("");

  
  const user = useUserData();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const handleCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };
  const handleAddRoom = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding Room")
    const form = e.target;
    const phoneNumber = form.phone.value;
    const firstTwoNumber = phoneNumber.slice(0, 2)
    console.log(firstTwoNumber);
  if (phoneNumber.length != "11") {
    toast.error("Phone number must be 11 digits Long",{toastId})
      return setPhoneNumberError("Phone number must be 11 digits Long");
    }
    else {
      setPhoneNumberError("");
    }
    const roomData = {
      name: form.name.value,
      userEmail:user.userEmail,
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
    axios.post("/addRoom", roomData)
    .then(data=>{
      if (data.data.acknowledged) {
        navigate('/dashboard/myListedHouse')
        return toast.success("Room added successfully",{id:toastId});
      }
    })
    .catch((error)=>{
      toast.error(error)
    })

  };
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Rent-Hunter | Add Jobs</title>
      </Helmet>
      <AddRoomForm phoneNumberError={phoneNumberError} handleAddRoom={handleAddRoom} handleCategory={handleCategory}></AddRoomForm>
    </div>
  );
};

export default AddNewHouse;

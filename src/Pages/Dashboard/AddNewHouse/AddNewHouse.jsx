import { Helmet } from "react-helmet";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUserData from "../../../Utility/Hooks/useUserData";
import useAxios from "../../../Utility/Hooks/useAxios";
import AddJobForm from "../../../Utility/Forms/AddJobForm";

const AddNewHouse = () => {
  const axios = useAxios();
  const  user  = useUserData();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const handleCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobData ={
      
    }
    axios.post("/add-jobs", jobData)
    .then(data=>{
      if (data.data.acknowledged) {
        navigate('/dashboard/myPostedJob')
        return toast.success("Job added successfully");
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
     <AddJobForm handleAddJob={handleAddJob} handleCategory={handleCategory}></AddJobForm>
    </div>
  );
};

export default AddNewHouse;

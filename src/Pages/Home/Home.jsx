import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Utility/Hooks/useAxios";
import HousesCard from "./HousesCard/HousesCard";
import { useState } from "react";

const Home = () => {
  const axios = useAxios()
  const [priceSort, setPriceSort] = useState("");
  const [bedrooms,setBedrooms] = useState()
  const [searchText, setSearchText] = useState("");
  const { data: houses, isLoading } = useQuery({
    queryKey: ['houses', searchText,priceSort],
    queryFn: async () => {
      const res = await axios.get(`/houses?search=${searchText}&sort=${priceSort}`)
      return res.data
    }
  })
  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };
  const handlePriceSort = (e) => {
    const sort = e.target.value;
    if (sort === "Low To High") {
      setPriceSort("asc");
    } else if (sort === "High To Low") {
      setPriceSort("desc");
    }
  };
  const handlePriceRange = (e) => {
    const numberOfBedrooms = e.target.value;
    if (numberOfBedrooms === "2") {
      setBedrooms(2)
    } else if (numberOfBedrooms === "4") {
      setBedrooms(4)
    } else if (numberOfBedrooms === "6") {
      setBedrooms(6)
    } else if (numberOfBedrooms === "8") {
     setBedrooms(8)
    } else if (numberOfBedrooms === "10") {
     setBedrooms(10)
    }
  };

  return (
    <div className=" container mx-auto">
      <p className="text-3xl font-semibold text-center my-20">Our Best Property</p>
      <div className="flex justify-center items-center gap-2 my-20">
        <input
          onChange={handleSearch}
          className="input md:w-full  font-semibold input-bordered border-main  rounded-full focus:border-main join-item"
          placeholder="Search by Title"
        />
        <select
          onChange={handlePriceSort}
          className="select select-bordered lg:w-auto w-[20vw] font-bold border-main focus:border-main rounded-full  join-item"
        >
          <option className="font-bold " disabled selected>
            Rent Per Month
          </option>
          <option>High To Low</option>
          <option>Low To High</option>
        </select>
        <select
          onChange={handlePriceRange}
          className="select select-bordered lg:w-auto w-[20vw] font-bold border-main focus:border-main rounded-full  join-item"
        >
          <option className="font-bold " disabled selected>
            Number Of BedRoom
          </option>
          <option>2</option>
          <option>4</option>
          <option>6</option>
          <option>8</option>
          <option>10</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3 justify-center items-center justify-items-center">
        {
          isLoading && <p>Loading</p>
        }
        {
          houses?.map(item => <HousesCard key={item._id} item={item}></HousesCard>)
        }
      </div>
    </div>
  );
};

export default Home;
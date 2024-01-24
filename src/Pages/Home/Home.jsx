import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Utility/Hooks/useAxios";
import HousesCard from "./HousesCard/HousesCard";
import { useState } from "react";

const Home = () => {
  const axios = useAxios()
  const [priceSort, setPriceSort] = useState("");
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { data: houses, isLoading, isPending } = useQuery({
    queryKey: ['houses', searchText,priceSort],
    queryFn: async () => {
      const res = await axios.get(`/houses?search=${searchText}&sort=${priceSort}`)
      return res.data
    }
  })
  const handlePriceRange = () => {

  }
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

  return (
    <div className=" mt-40 container mx-auto">
      <p className="text-3xl font-semibold text-center mb-20">Our Best Property</p>
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
            Search By Price Range
          </option>
          <option>$50000-$100000</option>
          <option>$100000-$200000</option>
          <option>$200000-$400000</option>
          <option>$400000-$600000</option>
          <option>$600000-$800000</option>
          <option>$800000-$900000</option>
          <option>$900000-$1000000</option>
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
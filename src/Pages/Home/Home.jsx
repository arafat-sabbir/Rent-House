import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Utility/Hooks/useAxios";
import HousesCard from "./HousesCard/HousesCard";

const Home = () => {
    const axios = useAxios()
    const {data:houses,isLoading,isPending}= useQuery({
        queryKey:['houses'],
        queryFn:async()=>{
            const res = await axios.get('/houses')
            return res.data
        }
    })
   if(isLoading||isPending){
    return <p>Loading</p>
   }
    return (
      <div className=" mt-40">
        <p className="text-3xl font-semibold text-center mb-20">Our Best Property</p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center justify-items-center">
            
            {
                houses?.map(item=><HousesCard key={item._id} item={item}></HousesCard>)
            }
        </div>
      </div>
    );
};

export default Home;
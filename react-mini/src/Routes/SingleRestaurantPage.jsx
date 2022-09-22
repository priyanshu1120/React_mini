import React , {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const getData = (id)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
}
function SingleRestaurantPage() {

  const [data,setUserData] = useState({})
 const params =useParams();

  useEffect(()=>{
    getData(params.id)
    .then(res=>res.json())
    .then(res=>{
      setUserData(res.data)
      console.log(res)
     
    })
  },[])




  return (
    <div >
      <div>
        <h3 >{data.name}</h3>
      </div>
      <div >Type: {data.type}</div>
      <div >Rating: {data.rating}</div>
      <div >Votes: {data.number_of_votes}</div>
      <div >Starting Price: {data.price_starts_from}</div>
      <div>
        <img  width={"100px"}  src={data.image} alt={data.name}/>
      </div>
    </div>
  );
}
export default SingleRestaurantPage;

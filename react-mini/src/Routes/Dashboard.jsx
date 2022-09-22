import React , {useState,useContext,useEffect} from "react";
import { AuthContext } from "../Context/AppContext";
import RestaurantTable from "../Components/RestaurantTable"
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination"
const getData = ({page=1})=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
}

function Dashboard() {
  const {state,logoutUser} = useContext(AuthContext);
  const [userData,setUserData] = useState([])
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState()
  
  useEffect(()=>{
    getData({page})
    .then(res=>res.json())
    .then(res=>{
      setUserData(res.data)
      console.log(res)
      setTotalPages(res.totalPages)
    })
  },[page])

  
const handlePageChange = (page)=>{
  setPage(page)
}
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">ABCD</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable  data = {userData} />

      </div>
      <div >
       <Pagination totalPages={totalPages} currentPage={page} handlePageChange={handlePageChange}/>
      </div>
    </div>
  );
}

export default Dashboard;

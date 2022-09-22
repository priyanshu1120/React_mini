import {RestaurantCard} from "./RestaurantCard"
import {Link} from "react-router-dom";


function RestaurantTable({data}){
  
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Type</th>
                        <th>Number of Votes</th>
                        <th>Price Starts From</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => (
                      
                      <RestaurantCard key = {item.id} name ={item.name}
                       rating = {item.rating} 
                       number_of_votes = {item.number_of_votes} 
                       type = {item.type}
                       price_starts_from = {item.price_starts_from}
                       id={item.id}
                       />
                         
                    
                    ))}
                </tbody>
            </table>
    )
}

export default RestaurantTable
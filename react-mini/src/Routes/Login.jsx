import {Link,useNavigate} from "react-router-dom"
import React , {useState,useContext} from "react";
import { AuthContext } from "../Context/AppContext";


const init = {email:"",password:""}
function Login() {

  const [formState,setFormState] = useState(init);
  const navigate = useNavigate();
  const {Auth,loginUser} = useContext(AuthContext)

const handleChange = (e)=>{
  const {name,value} = e.target;
  setFormState({
    ...formState,[name]:value
  })
}

const handleSubmit  =(e)=>{
  e.preventDefault();
  fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body:JSON.stringify(formState)
  })
  .then(res=>res.json())
  .then(res=>{

    loginUser(res.token)
// console.log(res)
    navigate("/dashboard")
  })
  .catch((err)=>{
    console.log(err)
  })
}


  return (
    <div>
      <form  onSubmit = {handleSubmit}>
        <div>
          <label>
            Email
            <input
            type="email" placeholder="email" 
            name="email" value = {formState.email} 
            onChange = {handleChange} required />

          </label>
        </div>
        <div>
          <label>
            Password
            <input
       
              type="password"
              placeholder="password"
              name="password" value = {formState.password}
              onChange = {handleChange}
              required 
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;

import React,{useContext} from "react";
import {AuthContext} from "../Context/AppContext"
import {Navigate} from "react-router-dom"

function PrivateRoute({children}) {
    const {state} = useContext(AuthContext)
    if(!state.isAuth){
        return <Navigate to = "/login" />
    }
    return children;
}

export default PrivateRoute;


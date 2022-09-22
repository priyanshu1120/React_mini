import React ,{useContext,useState} from "react"
export const AuthContext = React.createContext();
const Auth = {
    isAuth:false,
    token:null,
}

function AppContextProvider({children}) {

    const [state,setState] = useState(Auth)
    const loginUser = (token)=>{
        setState({
            ...state,
            isAuth:true,
            token:token
        })
    }

    const logoutUser = ()=>{
        setState({
            ...state,
            isAuth:false,
            token:null,
        })
    }
    return(
        <AuthContext.Provider value={{state,Auth,loginUser,logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AppContextProvider;

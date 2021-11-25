import {createContext,useState, useContext} from "react";

const UserContext = createContext();

export const useUserContext =()=>   useContext(UserContext)


function UserContextProvider({children}) {
    const [user, setUser] = useState()
    const [ifUser, setifUser]=useState(false)
    return (
        <UserContext.Provider value={{
            user,
            ifUser,
            setifUser,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

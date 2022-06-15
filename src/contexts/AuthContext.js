import React, { useContext, useState, useEffect } from "react"
import { auth} from "../Firebase"

const Authcontext = React.createContext()

export function useAuth() {
    return useContext(Authcontext)
  }
  
  
export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)

          setLoading(false)
        })
    
        return unsubscribe
      }, [])
    const value ={
        currentUser,
        login,
        signup
    }
    return (
        <Authcontext.Provider value={value}>
            {!loading && children}
        </Authcontext.Provider>
    )
}
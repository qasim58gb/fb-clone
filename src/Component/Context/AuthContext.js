// import React, { createContext} from 'react'
// import {signIn} from '../Login'

// const AuthContext = createContext()

// export default function AuthContextProvider({ props }) {
  

//   return <AuthContext.Provider value={signIn}>{props.children}</AuthContext.Provider>
// }
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user =>{
      if (user){
        setUser(user);
      }else{
        setUser(null);
      }
    })
  },[])
  const handleLogout = async () => {
    await auth().signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user , handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
    
  }

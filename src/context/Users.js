import React, { useState, useContext }from 'react'

export const userContext = React.createContext(null);
export const useUser = () => {
  const context = useContext(userContext);
  return context;
}
export const UserProvider = ({children}) => {
  const [user, setUser] = useState("test")

  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  )
}
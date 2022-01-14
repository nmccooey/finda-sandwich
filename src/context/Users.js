import React, { useState }from 'react'

export const userContext = React.createContext(null);

export const UserProvider = ({children}) => {
  const [user, setUser] = useState("test")

  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  )
}
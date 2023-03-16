import { createContext, useState } from "react";

const UserContext = createContext()
export const UserProvider = () => {
  // compartilhar statos entre componentes
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
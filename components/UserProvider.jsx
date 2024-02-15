"use client";

import { createContext, useContext } from "react";
import { useSession } from "next-auth/react"

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
  const { data: session } = useSession();
  const userId = session?.user.id;
  return (
    <UserContext.Provider value={ userId }>
        {children}
    </UserContext.Provider>
  )
};

export const userGlobalContext = () => useContext(UserContext);
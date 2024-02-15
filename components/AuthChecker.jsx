"use client"
import { useSession } from "next-auth/react"

const AuthChecker = ({children}) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  if (session?.user.role === "user") {
    return <p>Access Denied</p>
  }

  return (
    <>
      {children}
    </>
  )
}

export default AuthChecker;
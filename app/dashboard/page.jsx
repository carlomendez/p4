"use client"

import { useSession, getSession } from "next-auth/react"

const Dashboard = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
  
  if(session?.user.role != "admin"){
    return <p>Access Denied</p>
  }
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Books
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">Recommended</span>
        </h1>
        <p className="desc text-center">
            Books collect book recommendations by users for people to ponder upon.
        </p>    
    </section>
  )
}

export default Dashboard;
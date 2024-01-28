"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const navigation = [
    { name: 'News', href: "/news", current: false },
    { name: 'Find a Cave', href: "/find-a-cave", current: false },
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Nav = () => {
    const {data: session} = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
    }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            {/* <Image 
            src="/assets/images/logo.svg"
            alt="Books Logo"
            width={30}
            height={30}
            className="object-contain"
            /> */}
            <p className="logo_text">NICER CAVES</p>
        </Link>
        <div className="flex gap-3 md:gap-5">
                {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
        </div>
        {session?.user.role === "editor" ?  (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/article-dashboard" className="black_btn">
                        Manage Post
                    </Link>
                    {/* 
                    <Link href="/sample-status" className="black_btn">
                        Sample Status
                    </Link> */}
                </div>
            ) : (
                <>
                </>
            ) }
        {/* Desktop */}
        <div className="sm:flex hidden">
        {session?.user.role === "admin" ?  (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/article-dashboard" className="black_btn">
                        Manage Post
                    </Link>
                    <Link href="/dashboard" className="black_btn">
                        Dashboard
                    </Link>
                </div>
            ) : (<></>)}
            {session?.user ?  (
                <div className="flex gap-3 md:gap-5">
                    <button type="button" onClick={signOut} className="black_btn">
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                        />
                    </Link>
                </div>
            ) : (
                <div className="sm:flex hidden">
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button 
                                type="button" 
                                key="provider.name"
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))
                    }
                </div>
            ) }
        </div>
        {/* Mobile */}
        <div className="sm:hidden flex relative">
            {session?.user ? (
                <div className="flex">
                    <Image 
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link 
                                href="/profile"
                                className="dropdown_link"
                                onClick={()=> setToggleDropdown(false)}
                            >
                                My Profile
                            </Link>

                            {/* <Link 
                                href="/create-post"
                                className="dropdown_link"
                                onClick={()=> setToggleDropdown(false)}
                            >
                                Create Post
                            </Link> */}

                            <button
                                type="button"
                                onClick={()=>{
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full black_btn"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>    
            ): (
                <>
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button 
                                type="button" 
                                key="provider.name"
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))
                    }
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav
import React, { useState } from 'react'
import { useEffect} from 'react'
import {auth} from "./Firebase.js"
import Image from 'next/image';
// import {async} from 
import {useAuthState} from "react-firebase-hooks/auth"
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
const Header = () => {
    const [user,setUser]=useAuthState(auth);
    // const [toggleDropdown,setToggleDropdown]=useState(true);
const googleAuth=new GoogleAuthProvider();
useEffect(()=>{
    console.log(user);
    // setUPUser();
   
 },[user]);
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">ServEase</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <div>
    {user ? (<div className="flex gap-3 md:gap-5">

<button type="button"

onClick={()=>auth.signOut()}
className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Sign Out
        </button>
              <Image
                src={user.photoURL}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
           
        </div>):(<>
        {
                <button  onClick={async () => {
                    await signInWithPopup(auth,googleAuth);
                  }} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign In
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
            
        }</> )}
   </div>
  </div>
 
 
</header>
  )
}

export default Header

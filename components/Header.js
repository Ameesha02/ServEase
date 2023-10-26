// import React from 'react'
import { useEffect} from 'react'
import {auth} from "./Firebase.js"
import Image from 'next/image';
// // import {async} from 
import {useAuthState} from "react-firebase-hooks/auth"
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import React, { useState } from "react";
// import Map from './map.js';
import Link from 'next/link.js';

export default function Header() {
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [user,setUser]=useAuthState(auth);
    // const [toggleDropdown,setToggleDropdown]=useState(true);
const googleAuth=new GoogleAuthProvider();
useEffect(()=>{
    console.log(user);
    // setUPUser();
   
 },[user]);
    return (
        <div className="dark:bg-gray-900">
            <div>
                <div className="relative">
                    {/* For md screen size */}
                    <div id="md-searchbar" className={`${mdOptionsToggle ? "hidden" : "flex"} bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}>
                        <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
                            <div>
                                <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search here" className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none" />
                        </div>
                        <div className="space-x-6">
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
                    </div>
                    {/* For md screen size */}
                    {/* For large screens */}
                    <div className="dark:bg-gray-900 bg-gray-50 px-6 py-9">
                        <div className="container mx-auto flex items-center justify-between">
                            <h1 className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white" aria-label="the Crib.">
                            ServEase
                            </h1>
                            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                                <li className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    {/* <a href="javascript:void(0)" > */}
                                        Home
                                   
                                </li>
                                <Link href="/about">  
                                 <li className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        About Us
                                    
                                </li> 
                                   </Link>
                                <li className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    
                                        Lookbook
                                    
                                </li>
                           <Link href="/support">   <li className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                  Support
                                
                                </li></Link>  
                            </ul>
                            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                                <div className="hidden lg:flex items-center">
                                    <button onClick={() => setSearchInput(!searchInput)} aria-label="search items" className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2.99961 20.9999L7.34961 16.6499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <input id="searchInput" type="text" placeholder="search" className={` ${searchInput ? "hidden" : ""} text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`} />
                                </div>
                                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                                    <button aria-label="view favourites" className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                      <PlaceOutlinedIcon />
                                      {/* AIzaSyBGDs1G99WlqmN2sPanK84y051wEwIq6Iw */}
                                    </button>
                                   <div>  {user ? (<div className="flex gap-3 md:gap-5">
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
           
        }
          {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
          </> )} 
   </div>
                                </div>
                                <div className="flex lg:hidden">
                                    <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search here" className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
                            </div>
                            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 p-4">
                            <ul className="flex flex-col space-y-6">
                               <Link href="/"> <li className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                        
                                        Home
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    {/* </a> */}
                                </li></Link>
                             <Link href="/about"> <li className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                   
                                       About Us
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    
                                </li></Link>  
                                <li className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    {/* <a href="javascript:void(0)" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"> */}
                                        Lookbook
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    {/* </a> */}
                                </li>
                                <Link href="/support">  <li className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    {/* <a href="javascript:void(0)" className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"> */}
                                        Support
                                        <div>
                                            <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    {/* </a> */}
                                </li></Link>
                            </ul>
                        </div>
                        <div className="h-full flex items-end">
                            <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                                <li className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                    {/* <a href="javascript:void(0)" className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"> */}
                                        <div>
                                        <PlaceOutlinedIcon/>
                                        </div>
                                        <p className="text-base">Location</p>
                                    {/* </a> */}
                                </li>
                                <li>
                                    {/* <a href="javascript:void(0)" className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"> */}
                                    <div className="space-x-6">
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
   </div>  </div>
                                    {/* </a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

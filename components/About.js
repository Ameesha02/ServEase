import React from 'react'
import Footer from './Footer'
import Header from './Header'

const About = () => {
  return (
  <> 
  <Header/><section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="relative " >
                    <img src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg" alt="about"
                        className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"/>
                    <div
                        className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                    </div>
                    <div
                        className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="relative">
                    <h1
                        className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                        About Us
                    </h1>
                    <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                        Welcome to our site
                    </h1>
                </div>
                <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sed aut, doloribus nam dolorum reiciendis nulla odit ut molestias beatae fuga aspernatur, ea vero perspiciatis, minus quasi. Sed, magnam et!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at, laborum recusandae est labore voluptatem dignissimos voluptatibus corporis? Libero tempora quibusdam id non ducimus eveniet sit excepturi molestias esse reiciendis?

                </p>
                
            </div>
        </div>
    </div>
</section>
<section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
            <div className="mb-10 text-center">
                <span
                    className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
                    Team
                </span>
                <h1 className="text-3xl font-bold capitalize dark:text-white"> Meet Our Wonderful Team </h1>
            </div>
            <div className="flex flex-wrap justify-center ">
                <div className="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                    <div className="relative">
                        <div className="w-full h-80">
                            <img src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg" alt=""
                                className="object-cover w-full h-full lg:rounded-2xl"/>
                        </div>
                        <div
                            className="absolute w-full p-6 text-center bg-blue-900 lg:rounded-tl-full lg:right-0 lg:-mt-16 lg:w-72">
                            <h2 className="mb-1 text-xl font-bold text-gray-200 ">Riyana henry</h2>
                            <p className="text-sm text-gray-300">Designer </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                    <div className="relative">
                        <div className="w-full h-80">
                            <img src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" alt=""
                                className="object-cover w-full h-full lg:rounded-2xl"/>
                        </div>
                        <div
                            className="absolute w-full p-6 text-center bg-blue-900 lg:rounded-tl-full lg:right-0 lg:-mt-16 lg:w-72">
                            <h2 className="mb-1 text-xl font-bold text-gray-200 ">Robert Robinson</h2>
                            <p className="text-sm text-gray-300">Java developer </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                    <div className="relative">
                        <div className="w-full h-80">
                            <img src="https://i.postimg.cc/JzmrHQmk/pexels-pixabay-220453.jpg" alt=""
                                className="object-cover w-full h-full lg:rounded-2xl"/>
                        </div>
                        <div
                            className="absolute w-full p-6 text-center bg-blue-900 lg:rounded-tl-full lg:right-0 lg:-mt-16 lg:w-72">
                            <h2 className="mb-1 text-xl font-bold text-gray-200 ">Himron shet</h2>
                            <p className="text-sm text-gray-300">Supervisor </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <Footer/>
</>
  )
}

export default About

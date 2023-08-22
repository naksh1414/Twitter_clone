import React from 'react';
import { BsSearch } from "react-icons/bs";


const RightSidebar = () => {
  return (
    <section className="w-[35%] sticky top-0 overflow-scroll scrollbar-hide h-screen px-6 items-stretch flex flex-col">
    <div>
    <div className="relative w-full h-full mt-3 ml-2 "> 
    <label htmlFor="searchBox" className="absolute top-0 left-0 p-4 h-full flex items-center justify-center">
     <BsSearch classname=" w-5 h-5 text-gray-800"/>
    </label>
      <input type="text" id="searchBox" placeholder="Search" className=" focus:placeholder:text-white w-full h-10 mt-3 focus:border-cyan-300 transition duration-800 focus:bg-neutral-600 focus:border border rounded-full py-4 px-10 outline-none bg-neutral-800 " />
    </div>
    </div>
    <div className="flex flex-col rounded-xl h-screen bg-neutral-800 mt-4 items-center justify-center ml-4"> 
     <h3 className="font-bold text-lg my-4 px-4">Who to follow !</h3>
     <div className="mt-3 space-y-4 mb-4 relative w-full p-4">
      {
        Array.from({length:4}).map((_,i)=>
        (
          <div key={i} className="rounded-3xl flex h-15  relative">
           <div className="w-10 h-10 rounded-full p-3 m-2  bg-neutral-500"></div>
           <div className=" flex flex-col rounded-full">
            <div className="text-lg  text-gray-300 space-x-2 pl-2 pr-2 pt-1 ">Other user</div>
            <div className="text-sm  text-gray-500 pl-2 pr-2 mb-2">@otheruser3</div>
           </div>
           <div>
            <button className="rounded-full px-6 py-2 ml-3 mt-2 hover:bg-cyan-600 hover:opacity-70 hover:text-white transition duration-200 bg-gray-300 hover:border-white border-black hover:border text-neutral-700">
            Follow
            </button>
           </div>

            </div>
            
             
        ))
      }
     </div>
    </div>
    <div></div>
    <div className="flex flex-col rounded-xl  bg-neutral-800 mt-4 items-center justify-center ml-4"> 
     <h3 className="font-bold text-lg my-4 px-4">What's Happening</h3>
     <div className="mt-3 space-y-4 mb-4 relative w-full p-4">
      {
        Array.from({length:6}).map((_,i)=>
        (
          <div key={i} className="rounded-3xl hover:bg-white/20 transition duration-200 h-12 relative">
            <div className="font-bold text-lg text-neutral-500 pl-16 ml-3">#Trending ${i+1}</div>
            <div className="text-xs ml-10 text-neutral-200 pl-14">35.4k Shares

            </div>
            
             </div>
        ))
      }
     </div>
    </div>

   </section>
  )
}

export default RightSidebar

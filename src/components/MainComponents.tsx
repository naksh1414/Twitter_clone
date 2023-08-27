import React from 'react'
import {BsDot} from 'react-icons/bs';
import {BsChat} from 'react-icons/bs';
import {AiOutlineRetweet} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {TfiStatsUp} from 'react-icons/tfi';
import {IoMdShareAlt} from 'react-icons/io';
import {BsThreeDots} from 'react-icons/bs';

const MainComponents = () => {
  return (
    <main className="flex w-[60%] h-full min-h-screen  no-scrollbar flex-col border-l-[0.5px] border-r border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-1">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600  relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
               <input type="text" className="w-full h-full placeholder:text-2xl placeholder:text-gray-500 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none hover:placeholder:text-gray-300" placeholder="What's Happening !" />
             
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                <button className=' rounded-full  bg-cyan-600 px-4 py-2 w-full text-lg text-center hover:opacity-70 transition duration-100 font-bold'>Tweet
    </button>
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({length:5}).map((_,i)=>(
                <div key={i} className="border-b-[0.5px] p-4 flex space-x-4">
                  <div className="w-20 h-10 p-2 bg-slate-200 rounded-full">

                  </div>
                  <div className="flex flex-col  ">
                  <div className="flex items-center justify-between w-full">
                    < div className="flex items-center space-x-1 w-full">
                    <div className="font-bold"> Nakshatra Manglik</div>
                    <div className="text-gray-400">@Being Naksh</div>
                    <div className="text-gray-400">
                      <BsDot/>
                    </div>
        
                    <div className="text-gray-400"> 1 hour ago</div>
                    </div>
                    <div>
                      <BsThreeDots/>
                    
                    </div>
                    </div>
                 
                  <div className="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab beatae iure eum ipsum cumque nulla modi corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, voluptas!</div>
                   <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
                   <div className="flex justify-between space-x-2 w-full">
                    <div className="rounded-full hover:bg-white/50 p-2 transition duration-200 cursor-pointer mt-2">
                      <BsChat/>
                    </div>
                    <div className="rounded-full hover:bg-white/50 p-2 transition duration-200 cursor-pointer mt-2">
                      <AiOutlineRetweet/>
                    </div>
                    <div className="rounded-full hover:bg-white/50 p-2 transition duration-200 cursor-pointer mt-2">
                      <AiOutlineHeart/>
                    </div>
                    <div className="rounded-full hover:bg-white/50 p-2 transition duration-200 cursor-pointer mt-2">
                      <TfiStatsUp/>

                    </div>
                    <div className="rounded-full hover:bg-white/50 p-2 transition duration-200 cursor-pointer mt-2">
                      <IoMdShareAlt/>
                    </div>
                   </div>
                </div>
                </div>
              ))
            }

          </div>
        </main>
  )
}

export default MainComponents

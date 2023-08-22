
import LeftSidebar from "./components/LeftSidebar";
import MainComponents from "./components/MainComponents";
import RightSidebar from "./components/RightSidebar";



function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[95vw] w-full h-full flex relative border-3">
       <LeftSidebar/>
       <MainComponents/>
       <RightSidebar/>
       
      </div>
    </div>
  )
}

export default Home;

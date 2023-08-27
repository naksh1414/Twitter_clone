
import {BiHomeCircle} from 'react-icons/bi';
import {HiOutlineHashtag} from 'react-icons/hi'; 
import {IoMdNotifications} from 'react-icons/io';
import {TbMessages} from 'react-icons/tb';
import {FiUser} from 'react-icons/fi';
import {FiSettings} from 'react-icons/fi';
import {FaTwitter} from 'react-icons/fa';
import Link from 'next/link';
 
const Navigation_Items =[
  {
    title:'Twitter',
    icon:FaTwitter
  },
  
  {
    title:'Home',
    icon: BiHomeCircle
  },
  {
    title:'Explore',
    icon: HiOutlineHashtag
  },
  {
    title:'Notifications',
    icon:IoMdNotifications
  },
  {
    title:'Messages',
    icon:TbMessages
  },
  {
    title:'Profile',
    icon:FiUser
  },
  {
    title:'Settings',
    icon:FiSettings
  }
 
]

const LeftSidebar = () => {
  return (
    <section className="w-[20%] sticky top-0 flex flex-col items-stretch h-screen px-4">
    <div className='w-full flex flex-col items-stretch h-screen space-y-4 my-4'>
     {Navigation_Items.map((items) => (
      <Link className='hover:bg-white/20 transition duration-200 text-xl flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6 '
      href={`/${items.title.toLowerCase()}`}
      key={items.title}
      >
        <div>
          <items.icon/>
        </div>
        {items.title !=="Twitter" && <div>{items.title}</div>}
      </Link>

     ))
    }
    <button className=' rounded-full m-4 bg-cyan-600 p-2 text-2xl hover:opacity-70 transition duration-100'>Tweet
    </button>
    </div>
    
    
 
  </section>
  )
}

export default LeftSidebar

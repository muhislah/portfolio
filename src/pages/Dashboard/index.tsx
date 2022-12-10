import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* style */
import './dashboard.css'

const Dashboard = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleChangeMenu = () => {
    setOpenMenu((prev: boolean) => {
      let see = true
      if (prev === false) return true
      return false
    })
  }

  return (
    <>
      {/* header navbar*/}
      <div className='flex px-8 h-[10vh] items-center md:max-w-[1024px] md:mx-auto'>
        <h1 className='cursor-pointer font-bold text-[#00cba9]'>Muhamad</h1>
        <ul className='hidden md:flex ml-auto gap-5 font-semibold'>
          <li className='hover:text-[#00cba9] hover:border-b-2 hover:-mb-1 border-[#00cba9] transition ease-in-out duration-300 cursor-pointer'>Portfolios</li>
          <li className='hover:text-[#00cba9] hover:border-b-2 hover:-mb-1 border-[#00cba9] transition ease-in-out duration-300 cursor-pointer'>Blogs</li>
          <li className='hover:text-[#00cba9] hover:border-b-2 hover:-mb-1 border-[#00cba9] transition ease-in-out duration-300 cursor-pointer'>Profile</li>
          <li className='hover:text-[#00cba9] hover:border-b-2 hover:-mb-1 border-[#00cba9] transition ease-in-out duration-300 cursor-pointer'>Message</li>
        </ul>
        {/* hamburger */}
        <div className='flex md:hidden ml-auto border p-1 rounded-md' onClick={handleChangeMenu}>
          {openMenu ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          }
        </div>
      </div>
      {/* menu items list */}
      <div id="menulist" className={`md:hidden bg-[#00cba9] overflow-hidden transition-transform ${openMenu ? "open" : 'close'}`}>
        <ul className='flex flex-col w-full'>
          <li className='text-center py-1 text-white border-y border-y-green-200'>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className='text-center py-1 text-white border-y border-y-green-200'>
            <Link to="/portfolio">Blogs</Link>
          </li><li className='text-center py-1 text-white border-y border-y-green-200'>
            <Link to="/portfolio">Profile</Link>
          </li><li className='text-center py-1 text-white border-y border-y-green-200'>
            <Link to="/portfolio">Message</Link>
          </li>
        </ul>
      </div>
      {/* main header */}
      <div className='flex flex-col h-[90vh] md:h-[60vh] items-center p-8 justify-center md:max-w-[1024px] md:mx-auto'>
        <h1 className='font-bold text-6xl md:text-7xl text-center font-serif'>Hello <span className='text-[#00cba9] hidden md:inline-block'>  I am Muhamad</span></h1>
        <h1 className='font-bold block md:hidden text-3xl text-center font-serif text-[#00cba9]'>I am Muhamad</h1>
        <span className='font-semibold text-lg text-slate-500 font-serif italic md:text-2xl'>Frontend Developer</span>
        <p className='text-center mt-2 md:mt-5 font-serif md:text-xl'>Frontend developer who focused on write a clean, elegant, and efficient code</p>
        <button className='bg-[#00cba9] flex text-white py-2 px-3 mt-5 items-center gap-1 rounded-md focus:'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
          </svg>
          <span className='font-serif'>Explore</span>
        </button>
      </div>
      <div className='absolute w-full bottom-0 md:'>
        <div className='absolute w-full bottom-0'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,128L21.8,133.3C43.6,139,87,149,131,165.3C174.5,181,218,203,262,224C305.5,245,349,267,393,250.7C436.4,235,480,181,524,154.7C567.3,128,611,128,655,122.7C698.2,117,742,107,785,90.7C829.1,75,873,53,916,48C960,43,1004,53,1047,90.7C1090.9,128,1135,192,1178,229.3C1221.8,267,1265,277,1309,250.7C1352.7,224,1396,160,1418,128L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
        </div>
        <div className='absolute w-full bottom-0'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.6" d="M0,64L20,64C40,64,80,64,120,58.7C160,53,200,43,240,42.7C280,43,320,53,360,48C400,43,440,21,480,16C520,11,560,21,600,42.7C640,64,680,96,720,122.7C760,149,800,171,840,192C880,213,920,235,960,208C1000,181,1040,107,1080,90.7C1120,75,1160,117,1200,154.7C1240,192,1280,224,1320,213.3C1360,203,1400,149,1420,122.7L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        </div>
      </div>
    </>
  )
}

export default Dashboard
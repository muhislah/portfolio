import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './header.css'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const location = useLocation()

    const links = [
        { url: '/blog', label: 'Blog' },
        { url: '/portfolios', label: 'Portfolio' },
        { url: '/profile', label: 'Profile' },
        { url: '/message', label: 'Message' },
    ]

    const handleChangeMenu = () => {
        setOpenMenu(prev => !prev)
    }
    return (
        <>
            <div className='flex px-8 h-[10vh] items-center md:max-w-[1024px] md:mx-auto'>
                <h1 className={`cursor-pointer font-bold text-[#00cba9] border-[#00cba9] ${location.pathname === "/" ? 'text-[#00cba9] border-b-2 -mb-1' : ''}`}>
                    <Link to="/">Muhamad</Link>
                </h1>
                <ul className='hidden md:flex ml-auto gap-5 font-semibold'>
                    {
                        links.map((link) => {
                            return (
                                <li 
                                    className={`hover:text-[#00cba9] hover:border-b-2 hover:-mb-1 ${location.pathname === link.url ? 'text-[#00cba9] border-b-2 -mb-1' : ''} border-[#00cba9] transition ease-in-out duration-300 cursor-pointer`}
                                    key={link.url}
                                >
                                    <Link to={link.url}>{link.label}</Link>
                                </li>
                            )
                        })
                    }
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
            <div id="menulist" className={`md:hidden absolute w-full bottom-0 top-[8vh] bg-gradient-to-t from-[#00cba9] via-transparent to-white flex opacity-0 justify-end overflow-hidden transition-all ${openMenu ? "open" : 'close'}`}>
                <ul className='flex flex-col flex-shrink-0 w-1/3 mr-8 gap-1 h-initial'>
                    {
                        links.map((link) => (
                            <li key={link.url} className='text-right px-4 bg-[#00cba9] rounded-md py-2 text-white border-y border-y-green-200'>
                                <Link to={link.url}>{link.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Header
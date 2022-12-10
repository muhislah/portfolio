import React, { useEffect, useState } from 'react'
import helloData from './hello.json'

const Dashboard = () => {
    // const count = helloData.length
    // const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (counter === count - 1)  {
    //             setCounter(0)
    //         }else {
    //             setCounter(prev => prev+1)
    //         }
    //     }, 500)
    //     console.log(counter)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // },[counter])
    return (
        <>
            <div className='flex flex-col h-[70vh] md:h-[60vh] items-center p-8 justify-center md:max-w-[1024px] md:mx-auto'>
                <h1 className='text-6xl md:text-8xl text-center font-pacifico md:font-bebas'>Hello<span className=' hidden md:inline-block'><span>,</span><span className='text-[#00cba9]'>  I am Muhamad</span></span></h1>
                <h1 className='font-bold block md:hidden text-3xl text-center font-serif text-[#00cba9]'>I am Muhamad</h1>
                <span className='font-semibold text-lg text-slate-500 dark:text-slate-200 font-serif italic md:text-2xl'>Frontend Developer</span>
                <p className='text-center mt-2 md:mt-5 font-sans md:text-xl'>Frontend developer who focused on write a clean, elegant, and efficient code</p>
                <button className='bg-[#00cba9] flex text-white py-2 px-3 mt-5 items-center gap-2 rounded-md focus:'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                    </svg>
                    <span className='font-semibold'>Explore</span>
                </button>
            </div>
        </>
    )
}

export default Dashboard
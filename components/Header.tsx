"use client"
import { Cookie } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React from 'react'
const cookie = Cookie({ weight: ["400"], subsets: ['latin'] })

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="container py-5 mx-auto flex flex-row items-center flex-0">
          <a href='/' className={`${cookie.className} text-3xl`}>Jurnal Si Udin</a>
          <nav className="ml-auto">
            <ul className="flex flex-row gap-5 text-sm">
              <li className="hover:underline cursor-pointer"><a href="/articles">Articles</a></li>
              <li className="hover:underline cursor-pointer"><a href="/about">About</a></li>
              <li className="hover:underline cursor-pointer"><a href="/contact-us">Contact</a></li>
            </ul>
          </nav>
        </header>
    )
}

export default Header
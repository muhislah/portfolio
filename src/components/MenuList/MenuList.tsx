import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface IProps {
    children: JSX.Element
}

const MenuList = ({children}: IProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MenuList
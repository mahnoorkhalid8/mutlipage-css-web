import React from 'react'
import Link from 'next/link'
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuFootprints } from "react-icons/lu";

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'><LuFootprints />
        <h1 className='name'>Your Step</h1></div>
        <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="products">Products</Link>
        <Link href="contact-us">Contact Us</Link>
        <MdOutlineShoppingCart />
        </nav>
    </header>
  )
}

export default Header
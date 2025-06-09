import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-green-400 text-2xl p-4 flex gap-4 justify-start items-center'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/user">User</Link>
        </div>
    )
}

export default Navbar

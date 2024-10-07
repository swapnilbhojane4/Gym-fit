import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='logo font-semibold  text-center text-4xl  lg:text-4xl'>
                        JIM <span className='text-blue-400'>Fit</span>
                    </h1>
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
            <button className='signup px-8 py-4 mx-12  rounded-md border-[2px] bg-slate-950 border-blue-400 blueShadow duration-200'>
                <p>Sign Up</p>
            </button>
        </div>
    )
}

export default Header
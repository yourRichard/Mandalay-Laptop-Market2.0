import React from 'react'
import { GrSearch } from 'react-icons/gr';
import {  FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
    const user = useSelector(state => state?.user?.user)
    console.log("user-header",user)
    return (
        <header className='h-16 p-2 shadow-md bg-white'>
            <div className='container mx-auto h-full flex items-center px-4 justify-between'>
                <div className=''>
                    <Link to="/">
                        <h1 className='self-center'>Mandalay Laptop Market</h1>
                    </Link>
                </div>

                <div className='hidden lg:flex items-center max-w-sm border rounded-full justify-between focus-within:shadow pl-1'>
                    <input type='text' placeholder='search your product' className='w-full outline-none pl-2' />
                    <div className='text-lg min-w-[50px] h-8 bg-orange-500 hover:bg-orange-400 cursor-pointer transition-colors text-white flex items-center justify-center rounded-r-full'>
                        <GrSearch />
                    </div>
                </div>

                <div className='flex gap-4'>
                    <button type="button" className="text-white bg-sky-500 rounded-full font-medium  text-sm px-3.5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                        <FaRegUser/>
                    </button>

                    <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                        </svg>
                        Facebook
                    </button>
                    <div>
                        <Link to="/login" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
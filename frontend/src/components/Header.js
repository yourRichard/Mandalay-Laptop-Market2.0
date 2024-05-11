import React, { useState } from 'react'
import { GrSearch } from 'react-icons/gr';
import { FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';



const Header = () => {
    const user = useSelector(state => state?.user?.user);
    const [menuDisplay, setMenuDisplay] = useState(false);
    
    
    const handleLogout = async () => {
        const fetchData = await fetch(SummaryApi.logout_user.url, {
            method: SummaryApi.logout_user.method,
            credentials: 'include'
        });
        const data = await fetchData.json();
        if (data.success) {
            toast.success(data.message)
        }
        if (data.error) {
            toast.error(data.message)
        }
    }
    console.log("user-header", user)
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

                <div className='flex items-center gap-4'>
                    <div className='relative group flex justify-center'>
                        <button type="button" onClick={()=>setMenuDisplay(prev => !prev)} className="text-white bg-sky-500 rounded-full font-medium  text-sm px-3 py-3 text-center inline-flex items-center me-2 mb-2">
                            <FaRegUser />
                        </button>
                        {menuDisplay && (
                            <div className='absolute bg-slate-300/80 bottom-0 top-11 w-36 h-fit p-4 shadow-lg rounded-md'>
                                <nav className='text-center'>
                                    {user?._id ? (
                                        <p className='py-2 mb-2 font-semibold border-b border-b-slate-400'>{user.name}</p>
                                    ) : (<></>)}
                                    <Link to="/admin-panel" className='text-white px-2 py-1 bg-orange-400/80 hover:bg-orange-400 rounded-md'>Admin panel</Link>
                                </nav>
                            </div>
                        )}
                    </div>

                    <div>
                        {
                            user?._id ? (
                                <Link to="/login" onClick={handleLogout} className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                                    Logout
                                </Link>
                            )
                                :
                                (
                                    <Link to="/login" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                                        Login
                                    </Link>
                                )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
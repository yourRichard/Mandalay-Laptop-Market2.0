import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

const AdminPanel = () => {
  const user = useSelector(state => state?.user?.user)
  return (
    <div className='min-h-[calc(100vh-120px)] flex '>
        <div className='bottom-0 fixed md:hidden flex w-full bg-slate-300 h-[60px]'>
          lksfjlj
        </div>
        <aside className='bg-slate-200 min-h-full rounded-b-2xl md:block hidden w-full max-w-60 p-4'>
            {user?._id && (
              <div className='border-b border-b-slate-400 h-24'>
                <div className='flex flex-row mx-10 '>
                <div className='py-6 px-5 rounded-xl shadow-sm bg-orange-500 w-14 h-14 text-center flex items-center '>
                <h1 className='text-center font-semibold text-2xl text-slate-100'>{user.name.charAt(0)}</h1>
                </div>
                <div className='py-1 ml-4'>
                <p className=' text-slate-900 '>{user?.name}</p>
                <p className=' text-slate-900  font-semibold'>{user?.role}</p>
                </div>
                </div>

                <div className='flex flex-col text-center gap-3 py-16 '>

                  <Link to={"all-users"} className='hover:bg-slate-300 border-b border-b-slate-300 hover:rounded-lg py-2 w-[80%] flex items-center justify-center mx-auto'>All users</Link>

                  <Link to={"products"} className='hover:bg-slate-300  hover:rounded-lg py-2 w-[80%] flex items-center justify-center mx-auto'>Products</Link>
                </div>
              </div>
            )}

        </aside>
        <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel
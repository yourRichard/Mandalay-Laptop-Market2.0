import React from 'react'
import { useSelector } from 'react-redux'

const AdminPanel = () => {
  const user = useSelector(state => state?.user?.user)
  return (
    <div className='min-h-[calc(100vh-120px)] flex'>
        <aside className='bg-slate-200 min-h-full w-full max-w-80 p-4'>
            {user?._id && (
              <div className='border-b border-b-slate-400 h-24'>
                <div className='py-6 px-5 rounded-full shadow-sm bg-orange-500 w-14 h-14 text-center flex items-center mx-auto '>
                <h1 className='text-center font-semibold text-2xl text-slate-100'>{user.name.charAt(0)}</h1>
                </div>
                <p className='text-center text-slate-900 py-2'>{user.name}</p>
              </div>
            )}

        </aside>
        <main>
            main
        </main>
    </div>
  )
}

export default AdminPanel
import React, { useEffect, useState } from 'react'
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import {MdModeEdit} from 'react-icons/md';

const AllUsers = () => {

  const [allUser, setAllUser] = useState([]);

  const fetchAllUsers = async() => {
    const fetchData = await fetch(SummaryApi.all_user.url,{
      method: SummaryApi.all_user.method,
      credentials: 'include'
    })
    const dataResponse = await fetchData.json();

    if (dataResponse.success){setAllUser(dataResponse.data)}
    if (dataResponse.error){toast.error(dataResponse.error)}
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])
  
  return (
    <div>
      <table className='w-full border-b border-b-slate-400 bg-slate-50'>
        <thead className=''>
          <th className='border border-slate-400 py-2 '>No.</th>
          <th className='border border-slate-400'>Name</th>
          <th className='border border-slate-400'>Email</th>
          <th className='border border-slate-400'>Role</th>
          <th className='border border-slate-400'>Created Date</th>
          <th className='border border-slate-400'>Action</th>
        </thead>
        <tbody>
          {
            allUser.map((el,index)=>{
                return(
                  <tr className='border border-slate-400'>
                    <td className='text-center border border-slate-400 py-2'>{index+1}</td>
                    <td className='text-center border border-slate-400'>{el?.name}</td>
                    <td className='text-center border border-slate-400'>{el?.email}</td>
                    <td className='text-center border border-slate-400'>{el?.role}</td>
                    <td className='text-center border border-slate-400'>{moment(el?.createdAt).format('ll')}</td>
                    <td className=''>
                      <button className='items-center flex justify-center mx-auto bg-green-200 p-2 rounded-xl hover:bg-green-300 transition-all  hover:rounded-full'>
                        <MdModeEdit/>
                      </button>
                      </td>
                  </tr>
                )
            })}
          
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers
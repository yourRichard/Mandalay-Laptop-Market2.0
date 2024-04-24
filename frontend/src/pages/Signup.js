import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const Signup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.signUp.url, {
            method: SummaryApi.signUp.method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data)
        });
        
        const dataApi = await dataResponse.json();
        
        if(dataApi.success){
            toast.success(dataApi.message);
            navigate("/login")
        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }
        


    };


    return (
        <div className="h-full bg-gray-50 ">
            <div className="mx-auto" >
                <div className="flex justify-center px-6 py-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full h-auto bg-gray-200 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        >
                            sdlfkj
                        </div>
                        <div className="w-full lg:w-7/12 bg-white  p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="py-4 text-2xl text-center text-gray-800 ">Create a new Account</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="firstName">
                                            Your name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="name"
                                            name='name'
                                            value={data.name}
                                            onChange={handleOnChange}
                                            type="text"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name='email'
                                        value={data.email}
                                        onChange={handleOnChange}
                                        type="email"
                                        placeholder="example@gmail.com"
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name='password'
                                            value={data.password}
                                            onChange={handleOnChange}
                                            type="password"
                                            placeholder="******************"
                                        />

                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 " htmlFor="c_password">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="confirmPassword"
                                            name='confirmPassword'
                                            value={data.confirmPassword}
                                            onChange={handleOnChange}
                                            type="password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <p className="inline-block text-sm text-slate-500 align-baseline "
                                        href="./index.html">
                                        Already have an account?
                                        <Link to="/login" className='ml-2 text-orange-500'>
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
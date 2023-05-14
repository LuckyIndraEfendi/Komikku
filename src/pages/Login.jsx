import ThumbnailLogo from "../assets/thumbnail.jpg"
import { Link } from "react-router-dom"
import {
    FcGoogle,
    FaGoogle,
    FaUserAlt,
    AiOutlineMail
} from "../assets/Icons"

import { useAuthContext } from "../context/AuthContext"

const Login = () => {
    const { handleGoogleLogin, signInAnonymous, handleLoginFormSubmit, user, setUser } = useAuthContext()
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 top-24 md:top-20 relative">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="images  ">
                        <img className="mx-auto  rounded-full w-[135px] h-[129px] ring-blue-500 ring-3 border-x-4 border-y-4 border-blue-500" src={`${ThumbnailLogo}`} alt="Your Company" />
                    </div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-slate-200">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLoginFormSubmit} >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-200">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 " placeholder='Email Address' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-200 leading-6 ">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 " placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <div className="grid grid-cols-2 justify-between gap-3 mt-5">
                        <a href="" className="flex items-center px-3 py-2 justify-center hover:bg-[#2d2e2e] duration-200  shadow-white rounded-md gap-2 text-center w-full bg-[#3a3b3b] " >
                            <AiOutlineMail className="text-2xl text-slate-300" />
                            <span className="font-medium text-slate-300">Email</span>
                        </a>
                        <a href="" className="flex items-center px-3 py-2 justify-center rounded-md gap-2 text-center w-full bg-[#dae0e6] hover:bg-[#9d9fa3] duration-200  " onClick={handleGoogleLogin}>
                            <FcGoogle className="text-2xl" />
                            <span className="font-medium text-slate-800">Google</span>
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href="" className="flex items-center px-3 py-2 justify-center rounded-md gap-2 text-center w-full bg-[#3a3b3b]  hover:bg-[#343535]  duration-200  " onClick={signInAnonymous}>
                            <FaUserAlt className="text-xl text-white" />
                            <span className="font-medium text-white ml-1 text-sm">Anonymous</span>
                        </a>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Don't have Account?
                        <Link to='/register'><span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register</span></Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
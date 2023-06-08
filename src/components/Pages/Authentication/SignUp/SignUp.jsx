import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [show, setShow] = useState(false);



    return (
        <div className=' bg-green-700 py-[100px]'>
            <div className='w-[700px] h-[2000px] bg-white mx-auto py-32 px-12'>
                <h1 className="text-6xl text-slate-900 font-serif font-bold text-center">Register Now !</h1>
                <form>
                    <div className='mb-3 mt-20'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Name</span>
                        </label>
                        <br />
                        <input type="email" className='h-[68px] w-[600px] text-2xl text-black bg-slate-50 ps-3 border-b-red-500 mt-2' name="email" id="" />
                    </div>
                    <div className='mb-3 mt-5'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Email</span>
                        </label>
                        <br />
                        <input type="email" className='h-[68px] w-[600px] text-2xl text-black bg-slate-50 ps-3 border-b-red-500 mt-2' name="email" id="" />
                    </div>
                    <div className='mb-3 mt-10'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Password</span>
                        </label>
                        <br />
                        <label className="flex items-center">
                            <input type={show ? "text" : "password"} className='h-[68px] w-[520px] text-2xl text-black bg-slate-50 ps-3  mt-2' name="email" id="" />
                            <span className="bg-slate-500 h-[68px] px-4 py-3 w-20" onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash className="w-12 h-12 text-slate-900" /> : <FaEye className="w-12 h-12 text-slate-900" />
                                }
                            </span>
                        </label>
                    </div>
                    <div className='mb-3 mt-5'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Password</span>
                        </label>
                        <br />
                        <label className="flex items-center">
                            <input type={show ? "text" : "password"} className='h-[68px] w-[520px] text-2xl text-black bg-slate-50 ps-3 mt-2' name="email" id="" />
                            <span className="bg-slate-500 h-[68px] px-4 py-3 w-20" onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash className="w-12 h-12 text-slate-900" /> : <FaEye className="w-12 h-12 text-slate-900" />
                                }
                            </span>
                        </label>
                    </div>
                    <div className='mb-3 mt-5'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400'>Photo Url</span>
                        </label>
                        <br />
                        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs text-2xl mt-2" />
                    </div>
                    <input className="w-[600px] h-[70px] bg-sky-500 rounded-lg text-3xl text-white font-bold font-serif mt-20" type="submit" value="Sign Up" />
                </form>
                <div>
                    <h3 className="text-xl font-serif uppercase font-semibold text-green-400 p-5 text-center">Have account in emagraphy ? <Link className="hover:text-rose-500" to="/login">Login</Link></h3>
                    <hr className="h-1 bg-slate-200 mt-24" />
                    <button className="flex items-center text-3xl font-serif font-bold text-center my-16 mx-auto">
                        <span className="text-6xl text-red-600">G</span>
                        <span className="text-5xl text-green-600">o</span>
                        <span className="text-6xl text-yellow-500">o</span>
                        <span className="text-5xl text-sky-600">g</span>
                        <span className="text-6xl text-red-600">l</span>
                        <span className="text-5xl text-green-600">e</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
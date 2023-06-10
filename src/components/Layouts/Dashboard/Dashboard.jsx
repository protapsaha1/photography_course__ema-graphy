import { FaChalkboardTeacher, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
    // const isInstructor = true;
    // const isStudent = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-white">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[500px] h-full text-base-content bg-yellow-300">
                    {

                        isAdmin
                            // isInstructor
                            // isStudent

                            ?
                            // <h1 className="text-4xl text-green-700 font-serif font-bold mt-10 mb-10 text-center">EmaGraphy <span>Instructor</span></h1>
                            <h1 className="text-4xl text-green-700 font-serif font-bold mt-10 mb-10 text-center">EmaGraphy <span>Admin</span></h1>
                            :
                            <h1 className="text-4xl text-green-700 font-serif font-bold mt-10 mb-10 text-center">EmaGraphy <span>Students</span></h1>
                    }


                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/admin-home" className="flex items-center text-3xl font-bold font-serif text-slate-900"><FaHome className="w-12 h-12" /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manage-classes" className="flex items-center text-3xl font-bold font-serif text-slate-900">Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manage-users" className="flex items-center text-3xl font-bold font-serif text-slate-900">Manage Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/instructors-home" className="flex items-center text-3xl font-bold font-serif text-slate-900"><FaHome /> Instructors Home</NavLink></li>
                                <li><NavLink to="/dashboard/add-classes" className="flex items-center text-3xl font-bold font-serif text-slate-900">Add Class</NavLink></li>
                                <li><NavLink to="/dashboard/enrolled-students" className="flex items-center text-3xl font-bold font-serif text-slate-900">Enrolled Students</NavLink></li>
                            </>

                        // <>
                        //     <li><NavLink to="/dashboard/student-home" className="flex items-center text-3xl font-bold font-serif text-slate-900"><FaHome /> Student Home</NavLink></li>
                        //     <li><NavLink to="/dashboard/my-classes" className="flex items-center text-3xl font-bold font-serif text-slate-900">My Classes</NavLink></li>
                        //     <li><NavLink to="/dashboard/enrolled-classes" className="flex items-center text-3xl font-bold font-serif text-slate-900">My Enrolled Classes</NavLink></li>
                        // </>
                    }


                    <hr className="my-10 bg-black h-1 shadow-lg" />
                    <li><NavLink to="/" className="flex items-center text-3xl font-bold font-serif text-slate-900"><FaHome className="w-12 h-12" /> Home</NavLink></li>
                    <li><NavLink to="/classes" className="flex items-center text-3xl font-bold font-serif text-slate-900">Classes</NavLink></li>
                    <li><NavLink to="/instructors" className="flex items-center text-3xl font-bold font-serif text-slate-900"><FaChalkboardTeacher className="w-12 h-12" /> Instructors</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
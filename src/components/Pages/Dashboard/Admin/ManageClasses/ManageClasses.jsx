import Swal from "sweetalert2";
import useClasses from "../../../../CustomHook/useClasses";
import useTitle from "../../../../CustomHook/useTitle";
import useAxiosHook from "../../../../CustomHook/useAxiosHook";

const ManageClasses = () => {
    useTitle("Manage Classes");
    const { classes, refetch } = useClasses();
    const { axiosProtect } = useAxiosHook();
    const pending = classes.map(pend => pend.status === 'pending');
    const approved = classes.map(approve => approve.status === 'approved');
    const denied = classes.map(deny => deny.status === 'denied');

    // Approved
    const handleStatusApproved = id => {
        axiosProtect.put(`/classes/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `Approved Class`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };
    // Denied
    const handleStatusDenied = id => {
        axiosProtect.put(`/classes/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `Denied Class`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };


    return (
        <>
            <h1 className="text-6xl font-serif font-bold text-slate-950 text-start my-10">Total Classes {classes.length}</h1>
            <div className="overflow-x-auto w-[1800px] border-l-2 border-r-2  shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead className="bg-sky-500">
                        <tr>
                            <th className="text-2xl font-serif font-bold text-slate-950"> #</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Class Name & Image</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Instructors Name</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Instructors Email</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Available Seats</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Price</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Status</th>
                            {denied === true &&
                                <th className={approved === true || pending === true ? 'hidden' : "text-2xl font-serif font-bold text-slate-950"}>Feedback</th>
                            }

                        </tr>
                    </thead>
                    <tbody>
                        {classes &&
                            classes.map((classInfo, index) => <tr
                                key={classInfo._id}
                            >
                                <th className="text-2xl font-serif font-bold text-slate-950">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={classInfo?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.class_name}</h1>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.instructor_name}</h1>
                                </td>
                                <td>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.instructor_email}</h1>
                                </td>
                                <th>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.seats}</h1>
                                </th>
                                <th>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.price}</h1>
                                </th>
                                <th>
                                    <div className="text-2xl font-serif font-bold text-slate-950 flex">
                                        <>
                                            {classInfo?.status === "approved" ?
                                                <h1 className="text-2xl font-serif font-bold text-slate-950">Approved</h1>
                                                :
                                                <button onClick={() => handleStatusApproved(classInfo._id)} className={classInfo?.status === "denied" ? 'hidden' : "bg-green-500 text-2xl font-serif font-bold text-slate-50 mr-3 px-3 py-2 rounded-sm"}>Approved</button>
                                            }
                                        </>

                                        <>
                                            {classInfo?.status === "denied" ?
                                                <h1 className="text-2xl font-serif font-bold text-slate-950">Denied</h1>
                                                :
                                                <button onClick={() => handleStatusDenied(classInfo._id)} className={classInfo?.status === "approved" ? 'hidden' : 'bg-red-500 text-2xl font-serif font-bold text-slate-50 mr-3 px-3 py-2 rounded-sm'}>Denied</button>
                                            }
                                        </>
                                        <>
                                            {
                                                classInfo?.status === 'denied' &&
                                                <button className={classInfo?.status === "approved" || classInfo?.status === "pending" ? 'hidden' : "bg-yellow-400 text-2xl font-serif font-bold text-slate-50 mr-3 px-3 py-2 rounded-sm"}>Feedback</button>
                                            }
                                        </>
                                    </div>
                                </th>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div >
        </>
    );
};

export default ManageClasses;
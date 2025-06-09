// "use client";
import axios from 'axios';
import Link from 'next/link';


// import React, { useState, useEffect } from 'react'

// const Users = () => {
//     const [users, setUsers] = useState([])
//     useEffect(() => {
//         axios(process.env.NEXT_PUBLIC_BACKEND_URL).then((res) => {
//             setUsers(res.data);

//         })
//     })
//     return (
//         <div className='flex flex-wrap justify-center items-center gap-4 p-6'>
//             {users.map(({ id, name, username }) => {
//                 return (
//                     <div key={id} className=" p-3 m-3 border border-gray-300 rounded-lg shadow-md w-[255px] text-center">
//                         <h4>{username}</h4>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Users

// Yuxari client server

import React from 'react'

const Users = async () => {
    const { data } = await axios(process.env.NEXT_PUBLIC_BACKEND_URL)

    return (
        <div className='flex flex-wrap justify-center items-center gap-4 p-6'>
            {data.map(({ id, name, username }) => {
                return (
                    <div key={id} className=" p-3 m-3 border border-gray-300 relative rounded-lg shadow-md w-[255px] text-center">
                        <Link href={`/user/${id}`} className="absolute inset-0" > </Link>
                        <h4>{username}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Users

// import Userdetail from '@/Components/Userdetail';
// import axios from 'axios';
// import Yok from '../Yok';
// import React from 'react'

// const page = async ({ params }) => {
//     const { id } = await params;
//     try {
//         const { data } = await axios(process.env.NEXT_PUBLIC_BACKEND_URL + "/" + id)
//         return <div className=" flex flex-col p-3 "><h2 className='text-2xl'>users by id {id}</h2>
//             <Userdetail data={data} />
//         </div>
//     } catch {
//         Yok()



//     }
// }

// export default page
"use client"
import Userdetail from '@/Components/Userdetail'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { id } = useParams

    const [users, setUsers] = useState({})
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/" + id).then((res) => {
            if (!res.ok) {
                setUsers(res.data)
            }
        })
    }, [])
    return (
        <div>
            {users.username ? <Userdetail data={users} /> : <p>Not Found</p>}
        </div>
    )
}

export default page

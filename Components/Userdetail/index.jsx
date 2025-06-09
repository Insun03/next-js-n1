import React from 'react'

const Userdetail = ({ data }) => {
    return (
        <div>
            <div className='flex flex-col text-xl p-5    '><h3>{data?.username}</h3> <h3>{data?.name}</h3><h3>{data?.email}</h3><h3>{data?.address.street}</h3>

            </div>
        </div>
    )
}

export default Userdetail

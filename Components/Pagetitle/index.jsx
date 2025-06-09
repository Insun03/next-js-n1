import React from 'react'

const Title = ({ title }) => {
    return (
        <div>
            <h2 className='p-2 bg-black p-3 w-[222px] font-semibold text-zinc-700 text-3xl'><span className='text-amber-300' >{title}</span> page</h2>
        </div>
    )
}

export default Title

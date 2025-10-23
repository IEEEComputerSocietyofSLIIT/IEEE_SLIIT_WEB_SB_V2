import React from 'react'

export const HomeCards = (props) => {
    return (
        <div className='w-full sm:w-[140px] md:w-[160px] lg:w-1/5 p-4 sm:p-3 md:p-4 lg:p-5 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 shadow-lg text-white text-center z-[4]'>
            <p className='text-sm sm:text-xs md:text-sm lg:text-xl font-medium mb-1 sm:mb-1 md:mb-2'>{props.heading}</p>
            <p className='text-xl sm:text-base md:text-lg lg:text-2xl font-bold'>{props.count}</p>
        </div>
    )
}
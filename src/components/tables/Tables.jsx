import React from 'react'
import { FaBasketballBall, FaArrowRight } from 'react-icons/fa';

function Tables({ title1, title2, title3, data, renderRow  }) {
    if (!data || data.length === 0) {
    return <p className="text-center text-sm">Loading...</p>
    }
  return (
    <>
        <div className='bg-white rounded-xl p-10 pb-2 text-gray-500 text-sm font-semibold relative overflow-y-auto scroll-smooth scrollbar-hide'>
                <div className="grid grid-cols-[0.5fr_2fr_1fr] bg-white items-center">
                    <p>{title1}</p>
                    <p>{title2}</p>
                    <p className='justify-self-end mr-4'>{title3}</p>
                </div>
                <hr className='text-gray-2 border-t-2 mt-2 mb-4'/>
                {data.map(renderRow)}
        </div>
    </>
  )
}

export default Tables
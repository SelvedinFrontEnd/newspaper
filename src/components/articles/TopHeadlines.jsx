import React from 'react'
import { FaFutbol, FaBasketballBall } from 'react-icons/fa'

function TopHeadlines() {
  return (
    <>  
      <h2 className='mt-4 font-bold text-2xl ml-4 tracking-widest'>Top Headlines</h2>
      <div className='flex flex-col gap-4 ml-4 mt-8 font-semibold'>
        <div className='flex gap-2'>
          <FaBasketballBall className="text-3xl text-orange-400" />
          <div>TopHeadlines</div>
        </div>
        <div className='flex gap-2'>
          <FaBasketballBall className="text-3xl text-orange-400 " />
          <div>TopHeadlines</div>
        </div>
        <div className='flex gap-2'>
          <FaBasketballBall className="text-3xl text-orange-400 " />
          <div>TopHeadlines</div>
        </div>
        <div className='flex gap-2'>
          <FaBasketballBall className="text-3xl text-orange-400 " />
          <div>TopHeadlines</div>
        </div>
        <div className='flex gap-2'>
          <FaBasketballBall className="text-3xl text-orange-400 " />
          <div>TopHeadlines</div>
        </div>
        <div className='flex gap-2'>
          <FaBasketballBall className="text-3xl text-orange-400 " />
          <div>TopHeadlines</div>
        </div>
      </div>
    </>
    
  )
}

export default TopHeadlines
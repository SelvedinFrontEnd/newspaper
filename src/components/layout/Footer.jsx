import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer className='bg-black text-gray-400'>
            <div className='max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 gap-6 lg:grid-cols-3'>
                <div>
                    <h2 className='text-white text-lg font-bold'>NewsSportNow</h2>
                    <p className='text-sm mt-2'>Fast & clean sports news</p>   
                </div>
                
                <ul className="text-sm space-y flex flex-col">
                    <Link to="/" className='mt-2 first:mt-0'>
                        <span className="cursor-pointer hover:text-white">Home</span>
                    </Link>
                    <Link to="football" className='mt-2'>
                        <span className="cursor-pointer hover:text-white">Football</span>
                    </Link>
                    <Link to="nba" className='mt-2'>
                        <span className="cursor-pointer hover:text-white">NBA</span>
                    </Link>
                    <Link to="f1" className='mt-2'>
                        <span className="cursor-pointer hover:text-white">F1</span>
                    </Link>
                </ul>


                <div className="text-sm lg:ml-auto">
                    <p>© 2026 NewSportNow</p>
                    <p className="mt-2">Demo project for portfolio</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
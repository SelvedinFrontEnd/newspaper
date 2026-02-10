import React, { useState } from 'react'
import logo from "../../images/logo.png"
import { HiOutlineMenu } from "react-icons/hi"
import { HiOutlineXMark } from 'react-icons/hi2'
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-amber-50 font-inter flex items-center p-2 pl-4 z-60 sticky top-0">
        <img src={logo} alt="Newspaper logo" className="h-7 w-auto md:h-10 lg:h-13 md:ml-4" />
        <div className="md:hidden ml-auto mr-4">
        {!open ? (
          <HiOutlineMenu
            className="h-7 w-7 cursor-pointer text-amber-50"
            onClick={() => setOpen(true)}
          />
        ) : (
          <HiOutlineXMark
            className="h-7 w-7 cursor-pointer text-amber-50"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
            

          <div
          className={`
            absolute bg-black w-full top-full left-0 z-50
            flex flex-col p-2 pl-4 pb-4
            transform transition-all duration-300 ease-in-out
            ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}
          `}
        >

          <ul className="text-3xl flex flex-col font-bold space-y-4">
            <Link to="/" className="cursor-pointer">Home</Link>
            <Link to="football" className="cursor-pointer">Football</Link>
            <Link to="/nba" className="cursor-pointer">NBA</Link>
            <Link to="/f1" className="cursor-pointer">F1</Link>
          </ul>
        </div>


        <ul className='hidden md:flex gap-8 ml-8 text-3xl font-bold'>
          <Link to="/" className="cursor-pointer hover:text-gray-300 hover:scale-105 transform transition-all ease-in-out duration-500">Home</Link>
          <Link to="football" className='cursor-pointer hover:text-gray-300 hover:scale-105 transform transition-all ease-in-out duration-500'>Football</Link>
          <Link to="/nba" className='cursor-pointer hover:text-gray-300 hover:scale-105 transform transition-all ease-in-out duration-500'>NBA</Link>
          <Link to="/f1" className='cursor-pointer hover:text-gray-300 hover:scale-105 transform transition-all ease-in-out duration-500'>F1</Link>
        </ul>
        
      </nav>
      <div
          onClick={() => setOpen(false)}
          className={`
            fixed inset-0 z-30
            bg-black/50 backdrop-blur-sm
            transition-opacity duration-300 
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        />
    </>
  )
}

export default Navbar
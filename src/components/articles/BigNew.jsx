import React from 'react'
import image from "../../images/nba.webp"
import { FaBasketballBall } from "react-icons/fa";
import { Link } from 'react-router-dom';

function BigNew({ bigNew }) {
  
  return (
    <Link
      to={`/article/${encodeURIComponent(bigNew?.url)}`}
      className="h-full flex flex-col"
    >

      <div className="relative flex-1 overflow-hidden md:rounded-xl cursor-pointer">
        <img
          src={bigNew?.image || bigNew?.urlToImage}
          alt="News"
          className="lg:absolute inset-0 w-full h-full object-cover hover:rounded-xl hover:scale-105 transition-all ease-in-out duration-400"
        />
      </div>

      <div className="flex gap-4 p-3 ">
        <div className="sm:text-lg md:text-xl lg:text-2xl font-bold cursor-pointer hover:text-gray-700 transition-all ease-in-out duration-400 mt-1">
          {bigNew?.title}
        </div>
      </div>

    </Link>
  )
}


export default BigNew
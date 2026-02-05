import React from 'react'
import image from "../../images/nba.webp"
import { FaBasketballBall } from "react-icons/fa";

function BigNewSports() {

  return (
    <div className="h-full flex flex-col overflow-hidden">

      <div className="relative flex-1 overflow-hidden aspect-video rounded-xl cursor-pointer">
        <img
          src={image}
          alt="News"
          className="lg:absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-4 p-3 shrink-0">
        <FaBasketballBall className="text-3xl text-orange-400 mt-1" />
        <div className="text-xl font-bold line-clamp-2">
          Ovdje ide naslov artikla
        </div>
      </div>

    </div>
  )
}


export default BigNewSports
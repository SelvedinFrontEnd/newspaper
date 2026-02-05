import React, { useEffect, useState } from 'react'
import OneSchedule from './OneSchedule'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

function Schedule({ fixtures }) {

  return (
    <>
      <div className="relative">
        <div className="flex lg:flex-col gap-2 overflow-x-auto p-2 lg:p-0 scroll-smooth scrollbar-hide ">
          {fixtures.map((fixture, index) => (
            <OneSchedule key={index} fixture={fixture} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Schedule

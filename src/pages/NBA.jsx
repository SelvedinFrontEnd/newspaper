import React, { useContext  } from 'react'
import HeroSports from '../components/sportsarticles/HeroSports'
import SecondSports from '../components/sportsarticles/SecondSports'
import { NBAContext } from '../context/NBAContext'

function NBA() {
  const {eastTable, westTable, nbaNews } = useContext(NBAContext)
  const hero = nbaNews?.slice(0,3) || []
  const firstOther = nbaNews?.slice(4,8) || []

  return (
    <>
      <div>
        <HeroSports tableProps={{
      title1:"POS",
      title2:"TEAM",
      title3:"WINS",
      hero,
      data: westTable,
      renderRow: (team, index) => (
        <div key={index + 1} className='grid grid-cols-[0.5fr_2fr_1fr] items-center text-gray-900 font-bold mb-4'>
          <p>{index + 1}</p>
          <div className='flex items-center gap-2'>
            <img src={team.team.logo} className='w-5 h-5' alt="Team logo" />
            <p>{team.team.name}</p>
          </div>
          <p className='justify-self-end mr-4'>{team.games.win.total}</p>
        </div>
      )
    }}/>
        <SecondSports topGoalscorers={{
      title1:"POS",
      title2:"TEAM",
      title3:"WINS",
      hero,
      data: eastTable,
      renderRow: (team, index) => (
        <div key={index + 1} className='grid grid-cols-[0.5fr_2fr_1fr] items-center text-gray-900 font-bold mb-4'>
          <p>{index + 1}</p>
          <div className='flex items-center gap-2'>
            <img src={team.team.logo} className='w-5 h-5' alt="Team logo" />
            <p>{team.team.name}</p>
          </div>
          <p className='justify-self-end mr-4'>{team.games.win.total}</p>
        </div>
      )
    }}
    other={firstOther}/>
      </div>         
    </>
  )
}

export default NBA
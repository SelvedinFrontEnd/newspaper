import React, { useContext } from 'react'
import HeroSports from '../components/sportsarticles/HeroSports'
import SecondSports from '../components/sportsarticles/SecondSports';
import { FootballContext } from '../context/FootballContext';

function Football() {
  const {footballTable, footballNews, footballPlayers }= useContext(FootballContext)
  const hero = footballNews?.slice(0,3) || []
  const firstOther = footballNews?.slice(3,8) || []

return (
  <>
    <HeroSports tableProps={{
      title1:"POS",
      title2:"TEAM",
      title3:"PTS",
      hero,
      data: footballTable,
      renderRow: (team) => (
        <div key={team.team.id} className='grid grid-cols-[0.5fr_2fr_1fr] items-center text-gray-900 font-bold mb-4'>
          <p>{team.rank}</p>
          <div className='flex items-center gap-2'>
            <img src={team.team.logo} className='w-5 h-5' alt="Team logo" />
            <p>{team.team.name}</p>
          </div>
          <p className='justify-self-end mr-4'>{team.points}</p>
        </div>
      )
    }}
    />
    <SecondSports 
    topGoalscorers={{
      title1:"POS",
      title2:"PLAYERS",
      title3:"GOALS",
      hero,
      data: footballPlayers,
      renderRow: (player, index) => (
        <div key={player.player.id} className='grid grid-cols-[0.5fr_2fr_1fr] items-center text-gray-900 font-bold mb-4'>
          <p>{index + 1}</p>
          <div className='flex items-center gap-2'>
            <img src={player.player.photo} className='w-5 h-5' alt="Team logo" />
            <p>{player.player.name}</p>
          </div>
          <p className='justify-self-end mr-4'>{player.statistics[0].goals.total}</p>
        </div>
      )
    }}
    other={firstOther}/>
  </>

)}

export default Football
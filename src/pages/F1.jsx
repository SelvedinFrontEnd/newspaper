import { useContext } from 'react';
import HeroSports from '../components/sportsarticles/HeroSports';
import SecondSports from '../components/sportsarticles/SecondSports';
import { F1Context } from '../context/F1Context';

function F1() {
  const  { f1News, f1Teams, f1Drivers }  = useContext(F1Context)
  const hero = f1News?.slice(0,3) || []
  const firstOther = f1News?.slice(3,8) || []
  return (
    <>  
        <div>
            <HeroSports tableProps={{
      title1:"POS",
      title2:"TEAM",
      title3:"PTS",
      hero,
      data: f1Teams,
      renderRow: (team) => (
        <div key={team.team.id} className='grid grid-cols-[0.5fr_2fr_1fr] items-center text-gray-900 font-bold mb-4'>
          <p>{team.position}</p>
          <div className='flex items-center gap-2'>
            <img src={team.team.logo} className='w-5 h-5' alt="Team logo" />
            <p>{team.team.name}</p>
          </div>
          <p className='justify-self-end mr-4'>{team.points}</p>
        </div>
      )
    }}/>
            <SecondSports topGoalscorers={{
              title1:"POS",
              title2:"TEAM",
              title3:"PTS",
              hero,
              data: f1Drivers,
              renderRow: (team) => (
                <div key={team.driver.id} className='grid grid-cols-[0.5fr_2fr_1fr] items-center text-gray-900 font-bold mb-4'>
                  <p>{team.position}</p>
                  <div className='flex items-center gap-2'>
                    <img src={team.driver.image} className='w-5 h-5' alt="Team logo" />
                    <p>{team.driver.name}</p>
                  </div>
                  <p className='justify-self-end mr-4'>{team.points}</p>
                </div>
              )
            }}
            other={firstOther}/>
        </div>
    </>
  )
}

export default F1
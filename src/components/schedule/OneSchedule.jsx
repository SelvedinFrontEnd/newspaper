
function OneSchedule({ fixture }) {
  return (
    <>
        <div className='min-w-37.5 '>
            <p className='ml-2 text-xm text-gray-500 font-semibold'>{fixture.league.name}</p>
            <div className='bg-white p-2 flex flex-col gap-2 rounded-xl relative'>
                <div className='flex justify-between text-xs font-bold h-4'>
                    <p>{new Date(fixture.fixture.date).toLocaleDateString("en-GB")}</p>
                    <img src={fixture.league.logo} className='text-gray-700 truncuate w-8 h-8'/>
                </div>
                <div className='flex flex-col gap-2 text-sm font-bold'>
                    <div className='flex items-center gap-2'>
                        <img src={fixture.teams.home.logo} alt="club logo" className='w-8 h-8 object-contain' />
                        <p>{fixture.teams.home.name}</p>
                        <p>{fixture.score.fulltime.home}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={fixture.teams.away.logo} alt="club logo" className='w-8 h-8 object-contain' />
                        <p>{fixture.teams.away.name}</p>
                        <p>{fixture.score.fulltime.away}</p>
                    </div>  
                </div>        
            </div>    
        </div>
        
    </>
  )
}

export default OneSchedule
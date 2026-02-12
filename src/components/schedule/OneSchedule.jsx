
function OneSchedule({ fixture }) {
  return (
    <>
        <div className='min-w-37.5 '>
            <p className='ml-2 text-xm text-gray-500 font-semibold'>{fixture.league.name}</p>
            <div className='bg-white p-2 flex flex-col gap-2 rounded-xl relative'>
                <div className='flex justify-between text-xs font-bold h-4'>
                    <p>{new Date(fixture.fixture.date).toLocaleDateString("en-GB")}</p>
                    <img src={fixture.league.logo} className='text-gray-700 truncuate w-6 h-6 lg:w-7 lg:h-7'/>
                </div>
                <div className='flex flex-col gap-2 text-sm font-bold'>
                    <div className='grid grid-cols-[1fr_3fr_1fr] items-center gap-2'>
                        <img src={fixture.teams.home.logo} alt="club logo" className='w-8 h-8 object-contain' />
                        <p className="truncate">{fixture.teams.home.name}</p>
                        <p className="ml-auto mr-2">{fixture.score.fulltime.home}</p>
                    </div>
                    <div className='grid grid-cols-[1fr_3fr_1fr] items-center gap-2'>
                        <img src={fixture.teams.away.logo} alt="club logo" className='w-8 h-8 object-contain' />
                        <p className="truncate">{fixture.teams.away.name}</p>
                        <p className="ml-auto mr-2 ">{fixture.score.fulltime.away}</p>
                    </div>  
                </div>        
            </div>    
        </div>
        
    </>
  )
}

export default OneSchedule
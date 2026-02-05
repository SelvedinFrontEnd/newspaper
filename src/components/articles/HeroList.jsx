import BigNew from './BigNew'
import SmallNew from './SmallNew'
import Schedule from '../schedule/Schedule'

function HeroList({ hero, fixtures }) {
  
  const bigNew = hero[0]
  const smallNew = hero.slice(1,3)
  
  return (
    <>
    
      <div className="lg:flex w-full justify-center ml-auto mr-auto pl-0 pr-0 pt-6 pb-8 bg-gray-200">
      <div className="lg:flex lg:flex-row lg:max-h-125 md:max-w-344 lg:w-full lg:h-full lg:gap-6 lg:m-0 lg:my-auto lg:p-6
      flex flex-col gap-6 ">
        
        <div className='flex flex-col md:flex-row w-full gap-6 order-2 lg:order-1 md:p-2 lg:p-0'>
         <div className="lg:flex-col lg:min-h-0 lg:order-1 order-2
        md:flex-col md:h-120 md:max-w-62.5 md:order-2
        flex flex-col gap-6 ">
                  {smallNew.map((item, index) => (
            <div key={item.url || index} className="flex-1 min-h-0 ">
              <SmallNew news={item} />
            </div>
          ))}
        </div>

        <div className="flex-1 md:h-125 lg:order-2">
          <BigNew bigNew={bigNew}/>
        </div> 
        </div>
        

        <div className="lg:w-72.5 lg:h-120 order-1 md:order-1 overflow-y-auto scroll-smooth scrollbar-hide">
          <Schedule fixtures={fixtures}/>
        </div>

      </div>
    </div>
     
    </>
  )
}

export default HeroList

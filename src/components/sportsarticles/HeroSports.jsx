import Tables from '../tables/Tables'
import SmallNew from '../articles/SmallNew'
import BigNew from './../articles/BigNew';

function HeroSports({ tableProps  }) {
    const bigNew = tableProps.hero[0]
    const smallNew = tableProps.hero.slice(1,3)

  return (
    <>
        <div className='md:flex w-full justify-center ml-auto mr-auto pl-0 pr-0 lg:pt-6 bg-gray-200'>
            <div className="md:flex md:flex-col md:max-w-344 lg:w-full lg:h-full gap-6 m-0 my-auto md:p-6">
                <div className='flex flex-col md:flex-row md:flex-1 gap-6 md:h-125 '>
                    <div className='order-2 md:order-1 md:flex-1 md:h-125'>
                        <BigNew bigNew={bigNew}/>
                    </div>
                    <div className='order-1 md:order-2 md:flex-1 md:max-w-75 lg:max-w-100 max-h-112.5 m-6 md:m-0 rounded-2xl overflow-y-auto scroll-smooth scrollbar-hide'>
                        <Tables {...tableProps}/>
                    </div>
                </div> 
                <div className='md:flex md:flex-1 md:max-h-120 m-6 md:m-0 md:gap-6  '>
                    {smallNew.map((item, index) => (
                        <div className='md:flex-1' key={index}>
                            <SmallNew news={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSports

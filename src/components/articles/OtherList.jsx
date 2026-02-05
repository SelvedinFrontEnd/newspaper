import SmallNew from './SmallNew'
import BigNew from './BigNew'

function OtherList({color, other = []}) {
  
   if (other.length < 4) return null

  const bigNew = other[0]
  const leftColumn = other.slice(1, 3)
  const rightColumn = other.slice(3, 5)


  return (
    <div>
      <div style={color ? { backgroundColor:color } : undefined} className="lg:flex w-full justify-center ml-auto mr-auto pl-0 pr-0 pt-6 pb-8 bg-white">
        <div className="flex lg:flex-row flex-col lg:max-h-125 lg:max-w-344 lg:w-full lg:h-full gap-6 m-0 md:p-6 my-auto">
          <div className="flex-1 h-125">
          <BigNew bigNew={bigNew}/>
        </div>

      <div className='flex md:flex-row flex-col lg:h-125 gap-6 '>
        <div className="flex flex-col lg:max-w-62.5 lg:h-70 gap-6">
          {leftColumn.map((item, index) => (
            <SmallNew key={item.url || index} news={item} />
          ))}
        </div>

        <div className="flex flex-col lg:max-w-62.5 lg:h-70 gap-6">
          {rightColumn.map((item, index) => (
            <SmallNew key={item.url || index} news={item} />
          ))}
        </div>
        </div>

        </div>
      </div>
    </div>
    
  )
}

export default OtherList

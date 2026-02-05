import { Link } from "react-router-dom"

function SmallNew({news}) {
  
  return (
    <Link 
    className="flex flex-col h-full m-6 md:m-0" 
    to={`/article/${encodeURIComponent(news?.url)}`}>
      
      
      <div className="flex-1 min-h-0 rounded-2xl aspect-video overflow-hidden">
        <img
          src={news?.image || news?.urlToImage}
          alt="News image"
          className="w-full h-full rounded-2xl cursor-pointer transition-all duration-300 ease-in hover:scale-102 object-cover"
        />
      </div>

      
      <div className="flex pt-2 gap-4 pl-2 min-w-0">
        
        <h2 className="md:h-13 mt-1 min-w-0 line-clamp-2 sm:text-sm md:text-base lg:text-lg font-bold cursor-pointer hover:text-gray-700 transition-all duration-400">
          {news?.title}
        </h2>
      </div>
    </Link>
  )
}

export default SmallNew

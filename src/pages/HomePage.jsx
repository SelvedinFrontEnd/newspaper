import { useContext } from 'react';
import HeroList from '../components/articles/HeroList';
import OtherList from '../components/articles/OtherList';
import { NewsContext } from '../context/NewsContext';

function HomePage() {
  const  {news, fixtures}  = useContext(NewsContext)

  const hero = news.slice(0,3)
  const firstOther = news.slice(3,8)

  return (
    <>

        <HeroList hero={hero} fixtures={fixtures}/>
        <OtherList other={firstOther} />
    </>
  )
}

export default HomePage
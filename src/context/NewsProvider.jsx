import { useEffect, useState } from "react"
import { NewsContext } from "./NewsContext"
const NEWS_KEY = import.meta.env.VITE_NEWS_API_KEY;
const SCHEDULE_KEY = import.meta.env.VITE_SCHEDULE_API_KEY;

export function NewsProvider({ children }) {
    const [news, setNews] = useState([])
    const [fixtures, setFixtures] = useState([])

     useEffect(() => {
      async function fetchNews() {
        try {
          const res = await fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sport&api-key=${import.meta.env.VITE_NEWS_API_KEY}`
          );

          const result = await res.json();
          setNews(result.response.docs);
        } catch (err) {
          console.error(err);
        }
      }

      fetchNews();
    }, []);


    useEffect(() => {
  async function fetchFixtures() {
    const res = await fetch(
      "https://v3.football.api-sports.io/fixtures?league=39&season=2024&status=FT&from=2025-03-01&to=2025-05-31",
      {
        headers: {
          "x-apisports-key": import.meta.env.VITE_SCHEDULE_API_KEY,
        }
      }
    );
    const data = await res.json();
    console.log(data.response)
    setFixtures(data.response);
  }
  fetchFixtures();
}, []);
    
    return (
        <NewsContext.Provider value={{news, fixtures}}>
            {children}
        </NewsContext.Provider>
    )
}
import { useEffect, useState } from "react";
import { NBAContext } from "./NBAContext";
const NEWS_KEY = import.meta.env.VITE_NBA_NEWS_API_KEY;
const TABLE_KEY = import.meta.env.VITE_NBA_TABLE_API_KEY;

export function NBAProvider({ children }){
    const [eastTable, setEastTable] = useState([])
    const [westTable, setWestTable] = useState([])
    const [nbaNews, setNbaNews] = useState([])

         useEffect(() => {
                      async function fetchData() {
                          try {
                          const response = await fetch(
                              "https://v1.basketball.api-sports.io/standings?league=12&season=2023-2024",
                              {
                                  method: "GET",
                                  headers: {
                                      "x-apisports-key": import.meta.env.VITE_NBA_TABLE_API_KEY,
                                  }
                              }
                          ); 
                              const data = await response.json()
                              const raw = data.response[0]
                              const west = raw.filter(team => team.group?.name === "Western Conference")
                              const east = raw.filter(team => team.group?.name === "Eastern Conference")
                              
                              setEastTable(east)
                              setWestTable(west)
                          } catch (err) {
                              console.log(err)
                          }
                      }
                      fetchData()
                  },[])


         useEffect(() => {
            async function fetchNews(){
                try {
                    const res = await fetch(`https://newsapi.org/v2/everything?q=nba&language=en&apiKey=${import.meta.env.VITE_NBA_NEWS_API_KEY}`)
                    const result = await res.json()
                    setNbaNews(result.articles)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchNews()
            }, [])

    return(
        <NBAContext.Provider value={{westTable, eastTable, nbaNews}}>
            {children}
        </NBAContext.Provider>
    )
}
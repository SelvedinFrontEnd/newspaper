import { useEffect, useState } from "react"
import { F1Context } from "./F1Context"
const NEWS_KEY = import.meta.env.VITE_F1_NEWS_API_KEY;
const TABLE_KEY = import.meta.env.VITE_F1_TEAMS_API_KEY;
const PLAYERS_KEY = import.meta.env.VITE_DRIVERS_STATS_API_KEY;

export function F1Provider({ children }) {
    const [f1Teams, setF1Teams] = useState([])
    const [f1Drivers, setF1Drivers] = useState([])
    const [f1News, setF1News] = useState([])
    

     useEffect(() => {
        async function fetchData() {
            try {
               const response = await fetch(
                `https://v1.formula-1.api-sports.io/rankings/teams?season=2024`,
                {
                    method: "GET",
                    headers: {
                        "x-apisports-key": import.meta.env.VITE_F1_TEAMS_API_KEY,
                    }
                }
            ); 
                const data = await response.json()
                setF1Teams(data.response)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    },[])


    useEffect(() => {
        async function fetchData() {
            try {
               const response = await fetch(
                "https://v1.formula-1.api-sports.io/rankings/drivers?season=2024",
                {
                    method: "GET",
                    headers: {
                        "x-apisports-key": import.meta.env.VITE_DRIVERS_STATS_API_KEY,
                    }
                }
            ); 
                const data = await response.json()
                setF1Drivers(data.response)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    },[])
    

    useEffect(() => {
        async function fetchNews(){
          try {
              const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=f1&api-key=${import.meta.env.VITE_F1_NEWS_API_KEY}`)
              const result = await res.json()
              
              setF1News(result.response.docs)
          } catch (err) {
              console.log(err)
          }
        }
  
        fetchNews()
      }, [])

    return(
        <F1Context.Provider value={{f1Teams, f1Drivers, f1News}}>
            {children}
        </F1Context.Provider>
    )
}
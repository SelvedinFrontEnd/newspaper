import { useEffect, useState } from "react"
import { FootballContext } from "./FootballContext"
const NEWS_KEY = import.meta.env.VITE_FOOTBALL_NEWS_API_KEY;
const TABLE_KEY = import.meta.env.VITE_FOOTBALL_TABLE_API_KEY;
const PLAYERS_KEY = import.meta.env.VITE_PLAYERS_STATS_API_KEY

export function FootballProvider({ children }) {
    const [footballTable, setFootballTable] = useState([])
    const [footballNews, setFootballNews] = useState([])
    const [footballPlayers, setFootballPlayers] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
               const response = await fetch(
                "https://v3.football.api-sports.io/standings?league=39&season=2024",
                {
                    method: "GET",
                    headers: {
                        "x-apisports-key": import.meta.env.VITE_FOOTBALL_TABLE_API_KEY,
                    }
                }
            ); 
                const data = await response.json()
                if (data.response?.[0]?.league?.standings?.[0]) {
                setFootballTable(data.response[0].league.standings[0])
                } else {
                setFootballTable([])
            }

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
                "https://v3.football.api-sports.io/players/topscorers?season=2024&league=39",
                {
                    method: "GET",
                    headers: {
                        "x-apisports-key": import.meta.env.VITE_PLAYERS_STATS_API_KEY,
                    }
                }
            ); 
                const data = await response.json()
                setFootballPlayers(data.response || [])
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    },[])

    useEffect(() => {
      async function fetchNews(){
        try {
            const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=premier+league&api-key=${import.meta.env.VITE_FOOTBALL_NEWS_API_KEY}`)
            const result = await res.json()
            console.log(result)
            setFootballNews(result.response.docs)
        } catch (err) {
            console.log(err)
        }
      }

      fetchNews()
    }, [])

    return(
        <FootballContext.Provider value={{footballTable, footballNews, footballPlayers}}>
            {children}
        </FootballContext.Provider>
    )
}
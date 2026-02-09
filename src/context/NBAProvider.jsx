import { useEffect, useState } from "react";
import { NBAContext } from "./NBAContext";

const NEWS_KEY = import.meta.env.VITE_NBA_NEWS_API_KEY;
const TABLE_KEY = import.meta.env.VITE_NBA_TABLE_API_KEY;

export function NBAProvider({ children }) {
  const [eastTable, setEastTable] = useState([]);
  const [westTable, setWestTable] = useState([]);
  const [nbaNews, setNbaNews] = useState([]);

  useEffect(() => {
    async function fetchTable() {
      try {
        const response = await fetch(
          "https://v1.basketball.api-sports.io/standings?league=12&season=2023-2024",
          {
            method: "GET",
            headers: {
              "x-apisports-key": TABLE_KEY,
            },
          }
        );

        const data = await response.json();
        const raw = data.response[0];

        const west = raw.filter(
          (team) => team.group?.name === "Western Conference"
        );
        const east = raw.filter(
          (team) => team.group?.name === "Eastern Conference"
        );

        setWestTable(west);
        setEastTable(east);
      } catch (err) {
        console.error("NBA table error:", err);
      }
    }

    fetchTable();
  }, []);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=nba&api-key=${import.meta.env.VITE_NBA_NEWS_API_KEY}`)
        const result = await res.json()
        setNbaNews(result.response.docs)
      } catch(err) {
        console.log(err)
      }
    }
    fetchNews()
  },[])

  return (
    <NBAContext.Provider value={{ westTable, eastTable, nbaNews }}>
      {children}
    </NBAContext.Provider>
  );
}

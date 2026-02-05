import { NewsContext } from "./NewsContext";
import { NBAContext } from "./NBAContext";
import { F1Context } from "./F1Context";
import { FootballContext } from "./FootballContext";
import { ArticlesContext } from "./ArticlesContext";
import { useContext } from "react";

export function ArticlesProvider({ children }) {
  const { news } = useContext(NewsContext);
  const { nbaNews } = useContext(NBAContext);
  const { f1News } = useContext(F1Context);
  const { footballNews } = useContext(FootballContext);

  const allArticles = [
    ...(news || []),
    ...(nbaNews || []),
    ...(f1News || []),
    ...(footballNews || []),
  ];

  return (
    <ArticlesContext.Provider value={{ allArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
}

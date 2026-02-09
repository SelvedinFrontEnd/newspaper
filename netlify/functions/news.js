// newspaper/netlify/functions/news.js
import { getJson } from "serpapi";

export const handler = async () => {
  return new Promise((resolve) => {
    getJson(
      {
        engine: "google_news",
        q: "sports",
        api_key: "2e9ee9c78d7b9948e620bcbf25a3c00f2a1c5cfd34a00fcf585646265abc0009",
      },
      (json) => {
        resolve({
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(json.news_results || []),
        });
      }
    );
  });
};

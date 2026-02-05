import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext";

function Article() {
  const { allArticles } = useContext(ArticlesContext);
  const { id } = useParams();

  const decodedId = decodeURIComponent(id);

  const article = allArticles.find(item => item.url === decodedId);

  console.log(allArticles)
  if (!article) return <p>Article not found</p>;

  return (
    <div className="min-h-screen bg-gray-200 py-10">
  <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">

    {/* IMAGE */}
    <div className="w-full h-96 bg-gray-100">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENT */}
    <div className="p-6 md:p-8">

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {article.title}
      </h1>

      {/* META */}
      <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-6">
        {article.author && <span>By {article.author}</span>}
        {article.source?.name && <span>• {article.source.name}</span>}
      </div>

      {/* DESCRIPTION */}
      {article.description && (
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {article.description}
        </p>
      )}

      {/* CONTENT (PARTIAL – INTENTIONAL) */}
      {article.content && (
        <p className="text-gray-700 leading-7 mb-8">
          {article.content.split("[+")[0]}
        </p>
      )}

      {/* SOURCE LINK */}
      <div className="border-t pt-6">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 font-semibold hover:underline"
        >
          Read full article at source →
        </a>
      </div>
    </div>
  </article>

  {/* COMMENTS SECTION */}
  <section className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 md:p-8">
    <h2 className="text-xl font-bold mb-4">Leave a comment</h2>

    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />

      <textarea
        placeholder="Your comment"
        rows="4"
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
      ></textarea>

      <button
        type="submit"
        className="self-start bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Comment
      </button>
    </form>
  </section>
</div>

  );
}

export default Article;


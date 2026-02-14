import React, { useContext, useEffect, useState } from "react";
import { db } from "../components/utils/firebase/Firebase"

import { useParams } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext";
import { addDoc, collection, onSnapshot, orderBy, query, where } from "firebase/firestore";

function Article() {
  const { allArticles } = useContext(ArticlesContext);
  const { id } = useParams();
  const [formData,setFormData] = useState({
    name: "",
    comment: "",
  })
  const [comments, setComments] = useState([])

  const decodedId = decodeURIComponent(id);
  const article = allArticles.find(item => item.web_url === decodedId);

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("articleId", "==", decodedId),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setComments(commentsData);
  });

  return () => unsubscribe();

}, [decodedId]);

  function handleInputChange(e) {
    const { name, value } = e.target
    setFormData({...formData, [name]:value})
  }

  const handleComment = async () => {
    if (formData.name.length < 3 || formData.name.length > 30) {
      //Set error future
      return;
    } else if (formData.comment.length > 500) {
      // SET ERROR FUTURE
      return;
    } 

    try {
      await addDoc(collection(db, "comments"),{
        username: formData.name,
        content: formData.comment,
        createdAt: "22:00",
        articleId: decodedId,
      })

      setFormData({
        name: "",
        comment: "",
      })
    } catch (err) {
      console.log(err)
    } 
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleComment()
  }

  if (!article) return <p>Article not found</p>;

  return (
    <div className="min-h-screen bg-gray-200 py-10">
  <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">

    {/* IMAGE */}
    <div className="w-full h-96 bg-gray-100">
      <img
        src={article.urlToImage || article?.image || article?.urlToImage || article?.image_url || article?.multimedia.default.url }
        alt={article.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENT */}
    <div className="p-6 md:p-8">

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {article.title || article?.headline.main }
      </h1>

      {/* META */}
      <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-6">
        {article.author || article.byline.original && <span>{article.author || article.byline.original}</span>}
        {article.source && <span>• {article.source}</span>}
      </div>

      {/* DESCRIPTION */}
      {article.snippet && (
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {article.snippet}
        </p>
      )}

      {/* CONTENT (PARTIAL – INTENTIONAL) */}
      {article.abstract && (
        <p className="text-gray-700 leading-7 mb-8">
          {article.abstract.split("[+")[0]}
        </p>
      )}

      {/* SOURCE LINK */}
      <div className="border-t pt-6">
        <a
          href={article.web_url}
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

    <form 
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your name"
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />

      <textarea
        placeholder="Your comment"
        name="comment"
        value={formData.comment}
        onChange={handleInputChange}
        rows="4"
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
      ></textarea>

      <button
        className="self-start bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Comment
      </button>
    </form>
    {/* DISPLAY COMMENTS */}
<div className="mt-10">
  <h3 className="text-lg font-semibold mb-6 border-b pb-2">
    Comments ({comments.length})
  </h3>

  {comments.length === 0 && (
    <p className="text-gray-500 italic">No comments yet. Be the first one 👀</p>
  )}

  <div className="flex flex-col gap-6">
    {comments.map((c) => (
      <div
        key={c.id}
        className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm"
      >
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-gray-800">
            {c.username}
          </p>
          <span className="text-xs text-gray-400">
            {c.createdAt}
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          {c.content}
        </p>
      </div>
    ))}
  </div>
</div>

  </section>
</div>

  );
}

export default Article;


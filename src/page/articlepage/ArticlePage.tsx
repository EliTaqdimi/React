import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Typedata } from '../../type/typeData'

export default function ArticlePage() {
  const [article, setArticle] = useState<Typedata | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/articles/${params.id}`)
      .then((res) => {
        setArticle(res.data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setLoading(false);
      })
  }, [])

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-4xl font-bold mb-4 text-center">لیست مقالات</h1>
      <div className="flex flex-col items-center">
        <div className="w-full p-4">
          <img
            src={article.imageUrl}
            alt="مقاله"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className="w-full p-4">
          <h1 className="text-lg mb-4 text-center">{article.title}</h1>
          <h2 className="text-lg mb-4 text-center">time:{article.time}</h2>
          <h3 className="text-lg mb-4 text-center">athor:{article.athor}</h3>
          <p className="text-lg mb-4 text-center">
            {article.description}
          </p>
        </div>
      </div>
    </div>
  );
}


import React, { useEffect, useState } from 'react';
import Article from '../../component/article/Article';
import axios from 'axios';
import { Typedata } from '../../type/typeData';
import { Link } from 'react-router-dom';

export default function Home() {
  const [articles, setArticles] = useState<Typedata[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8000/articles')
      .then((result) => {
        console.log(result.data)
        setArticles(result.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, []);


  return (
    <div className='mb-72'>
      <div>
        <h1 className="text-4xl font-bold text-center pt-5 pb-8 ">عنوان مقاله</h1>
      </div>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-700 bg-opacity-50 backdrop-blur-sm z-50">
          <p className="text-2xl font-bold">Loading...</p>
        </div>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-40 "  >
          {articles.map((article) => (
            <Link to={`/article/${article.id}`} key={article.id}>
              <Article article={article} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

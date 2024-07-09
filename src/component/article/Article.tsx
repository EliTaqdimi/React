
import React from 'react';
import { Typedata } from '../../type/typeData';

interface ArticleProps {
  article: Typedata;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg mx-auto mb-4 max-w-lg">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-bold text-right">{article.title}</h2>
      <h1 className="text-lg mb-4 text-left">time:{article.time}</h1>
      <h1 className="text-lg mb-4 text-left">athor:{article.athor}</h1>
      <p className='text-right'>{article.description}</p>
    </div>
  );
};

export default Article;


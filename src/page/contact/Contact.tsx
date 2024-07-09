import React, { useState } from 'react';
import Input from '../../component/form/Input';
import Textarea from '../../component/textarea/textarea';
import axios from 'axios';

const ArticleForm = ({ onArticleCreated }) => {
  const [article, setArticle] = useState({
    title: '',
    time: '',
    athor: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangedescription = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleCreateArticle = async (e) => {
    e.preventDefault();
    console.log('Sending article:', article); // Print article data to console
    try {
      const response = await axios.post('http://localhost:8000/articles', {
        title: article.title,
        time: article.time,
        athor: article.athor,
        description: article.description,
        imageUrl: article.imageUrl
      });
      if (response.status === 201) {
        console.log('Article created:', response.data); // Print response data to console
        onArticleCreated(response.data);
      }
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center pb-64">
      <form className="bg-gray-700 p-8 rounded-lg w-full max-w-lg space-y-6" onSubmit={handleCreateArticle}>
        <h1 className='text-center text-2xl mb-4 text-white'>لطفا فرم زیر را تکمیل کنید</h1>
        <div>
          <Input name='title' label='عنوان' handleChange={handleChange} />
        </div>
        <div>
          <Input name='time' label='تایم خواندن' handleChange={handleChange} />
        </div>
        <div>
          <Input name='imageUrl' label='آپلودعکس' handleChange={handleChange} />
        </div>
        <div>
          <Input name='athor' label="نویسنده" handleChange={handleChange} />
        </div>
        <div>
          <Textarea label="متن مورد نظر را وارد کنید" handleChange={handleChangedescription} />
        </div>
        <div>
          <button type="submit" className="w-full p-2 rounded bg-blue-600 text-white">ایجاد مقاله جدید</button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;

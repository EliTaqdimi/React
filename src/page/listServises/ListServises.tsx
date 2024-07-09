import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typedata } from '../../type/typeData';

const ListServises: React.FC<{}> = () => {
  const params = useParams();
  const [servise, setServise] = useState<Typedata | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/servises/${params.id}`).then((response) => {
      setServise(response.data);
    });
  }, []);

  if (!servise) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div className="flex justify-center items-center  my-20">
      <div className="container mx-auto p-40 bg-gray-100 rounded shadow-lg">
        <div className="flex flex-col items-center">
          <img src={servise.imageUrl} alt='' className="w-80 h-auto rounded mb-4" />
          <h1 className="text-xl font-bold mb-2 text-center">{servise.title}</h1>
          <p className="text-lg text-center">{servise.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ListServises;

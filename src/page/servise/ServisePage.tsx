import React, { useEffect, useState } from 'react';
import { Typedata } from '../../type/typeData';
import axios from 'axios';
import Servise from '../../component/servise/Servise';
import { Link } from 'react-router-dom';

const ServisePage: React.FC<{}> = () => {
  const [servise, setServise] = useState<Typedata[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8002/servises').then((response) => {
      setServise(response.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold mt-20 text-center">خدمات ما</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-40 mt-20">
        {servise.map((servise) => (
          <Link key={servise.id} to={`/servise/${servise.id}`}>
            <Servise servise={servise} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ServisePage;

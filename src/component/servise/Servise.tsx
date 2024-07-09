
import React from 'react'
import { Typedata } from '../../type/typeData';
interface ServisesProps {
  servise: Typedata;
}

const Servise: React.FC<ServisesProps> = ({ servise }) => {
  return (

    <div className="container mx-auto p-4 bg-gray-100 ">
      <img src={servise.imageUrl} alt='' className="w-80 h-auto rounded mb-4" />
      <h1 className="text-xl font-bold mb-2 text-right">{servise.title}</h1>
      <p className="text-lg text-right">{servise.description}</p>
    </div>
  )
}
export default Servise;
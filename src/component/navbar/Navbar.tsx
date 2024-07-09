// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (prop) => {
  return (
    <nav className="w-full bg-gray-800 p-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">{prop.logo}</div>
        <ul className="flex space-x-6 flex-row-reverse">
          <li><Link to="/" className="text-white ml-4">خانه</Link></li>
          <li><Link to="/about" className="text-white">درباره ما</Link></li>
          <li><Link to="/servise" className="text-white">خدمات</Link></li>
          <li><Link to="/contact" className="text-white">تماس با ما</Link></li>
          <li><Link to="/weather" className="text-white">هواشناسی</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

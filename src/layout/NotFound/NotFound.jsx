import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <p>Bạn đi sai đường dẫn</p>
        <Link className="bg-red-500 text-white py-2 px-5 rounded" to="/">
          Click go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

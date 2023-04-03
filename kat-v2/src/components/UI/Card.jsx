import React from 'react';

// eslint-disable-next-line react/prop-types
function Card({ children, style }) {
  return (
    <div
      className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      style={style}
    >
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
    </div>
  );
}

export default Card;

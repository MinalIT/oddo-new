import React from 'react';

const NotificationBox = ({ message, type }) => {
  const typeClasses = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className={`rounded shadow-lg p-4 ${typeClasses[type]}`}>
      {message}
    </div>
  );
};

export default NotificationBox;

import React from 'react';

const ErrorNotification = ({ message }) => {
  return (
    <div className="error-notification">
      <p>{message ? message.toString() : 'An error occurred.'}</p>
    </div>
  );
};

export default ErrorNotification;

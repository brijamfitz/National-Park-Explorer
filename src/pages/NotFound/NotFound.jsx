import './notFound.scss';
import React from 'react';
import Header from '../../components/Header/Header';

const NotFound = () => {
  return (
    <>
      <Header />

      <div className="not-found__message">
        <div>The page you are looking for could not be found. Click the icon in the top left to return home.</div>
      </div>
    </>
  )
}

export default NotFound;

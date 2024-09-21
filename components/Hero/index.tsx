import React from 'react';
import CategoryList from '../Category/CategoryList';
import Foto from '../Foto';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container ">
        <div className="flex ">
        <CategoryList />
        <Foto />
        </div>
      </div>
    </div>
  );
};

export default Hero;

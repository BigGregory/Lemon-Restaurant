import React from 'react';

import foodImg from '../assets/restaurant-food.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-info content-container">
        <header>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
        </header>
        <p className="banner-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque
          nemo consequatur magnam, nulla at repellendus quia odio molestiae et
          fugit.
        </p>
        <button className="table-reserve">Reserve a Table</button>
        <img src={foodImg} className="banner-img" alt="Food image" />
      </div>
    </section>
  );
};

export default Banner;

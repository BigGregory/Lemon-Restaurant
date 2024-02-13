import { Link } from 'react-router-dom';
import Button from './Button';

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
        <Link to="reservation">
          <Button label="Reserve a Table" />
        </Link>
        <img src={foodImg} className="banner-img" alt="Food image" />
      </div>
    </section>
  );
};

export default Banner;

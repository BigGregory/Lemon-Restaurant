import pasta from '../assets/pasta.jpg';
import bread from '../assets/bread.jpg';
import salad from '../assets/salad.jpg';

const testimonialsList = [
  {
    testimonyId: '1',
    userName: 'Greg',
    rating: '5',
    review: 'Super delicious meal and great service',
    mealImg: pasta,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-info content-container">
        <h2>Testimonials</h2>
        {testimonialsList.map(
          ({ testimonyId, userName, rating, review, mealImg }) => {
            <TestimonyCard
              userName={userName}
              mealImg={mealImg}
              rating={rating}
              review={review}
              key={testimonyId}
            />;
          },
        )}
        <TestimonyCard />
      </div>
    </section>
  );
};

const TestimonyCard = ({ userName, mealImg, rating, review }) => {
  return (
    <div className="testimony-card">
      <span>{rating}</span>
      <img src={mealImg} alt="Meal" />
      <span>{userName}</span>
      <span>{review}</span>
    </div>
  );
};

export default Testimonials;

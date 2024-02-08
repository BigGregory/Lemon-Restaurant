import pasta from '../assets/pasta.jpg';
import bread from '../assets/bread.jpg';
import salad from '../assets/salad.jpg';

const testimonialsList = [
  {
    testimonyId: '1',
    userName: 'Greg',
    meal: 'Pasta',
    mealRating: '5',
    mealReview: 'Super delicious meal and great service',
    mealImg: pasta,
  },
  {
    testimonyId: '2',
    userName: 'Nata',
    meal: 'Pasta',
    mealRating: '4',
    mealReview: 'Delicious meal and good service, need to be less spicy',
    mealImg: pasta,
  },
  {
    testimonyId: '3',
    userName: 'John',
    meal: 'Bruchetta',
    mealRating: '5',
    mealReview: 'Super delicious meal and great service',
    mealImg: bread,
  },
  {
    testimonyId: '4',
    userName: 'Bella',
    meal: 'Greek Salad',
    mealRating: '5',
    mealReview: 'Super delicious meal and great service',
    mealImg: salad,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-info content-container">
        <h2>Testimonials</h2>
        <div className="reviews">
          {testimonialsList.map(
            ({
              testimonyId,
              userName,
              meal,
              mealRating,
              mealReview,
              mealImg,
            }) => (
              <TestimonyCard
                userName={userName}
                meal={meal}
                mealImg={mealImg}
                mealRating={mealRating}
                mealReview={mealReview}
                key={testimonyId}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

const TestimonyCard = ({ userName, meal, mealImg, mealRating, mealReview }) => {
  return (
    <div className="testimony-card">
      <div className="meal-name">{meal}</div>
      <div className="meal-rating">
        Rating: <span>{mealRating}</span>
      </div>
      <div className="user-meal-container">
        <img src={mealImg} alt="Meal" />
        <div className="user">{userName}</div>
      </div>
      <div className="meal-review">{`"${mealReview}"`}</div>
    </div>
  );
};

export default Testimonials;

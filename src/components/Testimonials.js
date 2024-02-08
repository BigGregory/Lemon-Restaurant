import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';

const testimonialsList = [
  {
    userId: '1',
    userName: 'Greg',
    userImg: user1,
    restaurantRating: '5',
    serviceReview: 'Super delicious meals and great service',
  },
  {
    userId: '2',
    userName: 'Nata',
    restaurantRating: '4',
    serviceReview:
      'Delicious meals and good service, food need to be less spicy',
    userImg: user2,
  },
  {
    userId: '3',
    userName: 'John',
    restaurantRating: '5',
    serviceReview: 'Super delicious meals and great service',
    userImg: user3,
  },
  {
    userId: '4',
    userName: 'Bella',
    restaurantRating: '5',
    serviceReview: 'Super delicious meals and great service',
    userImg: user4,
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
              userId,
              userName,
              restaurantRating,
              serviceReview,
              userImg,
            }) => (
              <TestimonyCard
                userName={userName}
                userImg={userImg}
                restaurantRating={restaurantRating}
                serviceReview={serviceReview}
                key={userId}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

const TestimonyCard = ({
  userName,
  userImg,
  restaurantRating,
  serviceReview,
}) => {
  return (
    <div className="testimony-card">
      <div className="meal-rating">
        Rating: <span>{restaurantRating}</span>
      </div>
      <div className="user-meal-container">
        <img src={userImg} alt="Meal" />
        <div className="user">{userName}</div>
      </div>
      <div className="meal-review">{`"${serviceReview}"`}</div>
    </div>
  );
};

export default Testimonials;

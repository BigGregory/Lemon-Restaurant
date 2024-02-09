import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import FeedbackCard from './FeedbackCard';

const testimonialsList = [
  {
    userId: '1',
    userName: 'Nata',
    userImg: user1,
    restaurantRating: '5',
    serviceReview: 'Super delicious meals and great service',
  },
  {
    userId: '2',
    userName: 'Greg',
    restaurantRating: '4',
    serviceReview:
      'Delicious meals and good service, food need to be less spicy',
    userImg: user2,
  },
  {
    userId: '3',
    userName: 'Bella',
    restaurantRating: '5',
    serviceReview: 'Super delicious meals and great service',
    userImg: user3,
  },
  {
    userId: '4',
    userName: 'John',
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
              <FeedbackCard
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

export default Testimonials;

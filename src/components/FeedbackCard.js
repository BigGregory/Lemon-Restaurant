import starIcon from '../assets/star-icon.svg';

const FeedbackCard = ({
  userName,
  userImg,
  restaurantRating,
  serviceReview,
}) => {
  return (
    <div className="feedback-card">
      <div className="restaurant-rating">
        <span>Rating:</span>
        <span>
          {[...restaurantRating.repeat(restaurantRating)].map((rate, index) => (
            <img src={starIcon} key={index + 1} alt="rate star" width="18px" />
          ))}
        </span>
      </div>
      <div className="user-feedback-container">
        <img className="user-photo" src={userImg} alt="Meal" />
        <div>{userName}</div>
      </div>
      <div className="user-feedback">{`"${serviceReview}"`}</div>
    </div>
  );
};

export default FeedbackCard;

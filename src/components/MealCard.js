const MealCard = ({
  img,
  title,
  price,
  description,
}) => {
  const orderDeliveryAction = () => {
    console.log(`Order Delivery:
    Meal: ${title}
    Price: ${price}
    Description: ${description}
    `);
  };

  return (
    <div className="meal-card">
      <img src={img} alt={title} />
      <div className="meal-card-content">
        <header>
          <h4>{title}</h4>
          <span>{price}</span>
        </header>
        <p>{description}</p>
        <button
          onClick={orderDeliveryAction}
        >
          Order Delivery
        </button>
      </div>
    </div>
  );
};

export default MealCard;

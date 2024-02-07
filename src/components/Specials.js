import Button from './Button';
import MealCard from './MealCard';

import salad from '../assets/salad.jpg';
import bread from '../assets/bread.jpg';
import pasta from '../assets/pasta.jpg';

const specialsData = [
  {
    productId: '1',
    img: salad,
    title: 'Greek Salad',
    price: '12.99',
    description: `Some random description of a meal with lots of ingredients and so on.
  And lot lot more and delicious.`,
  },
  {
    productId: '2',
    img: pasta,
    title: 'Pasta',
    price: '5.99',
    description: `Some random description of a meal with lots of ingredients and so on.
And lot lot more and delicious.`,
  },
  {
    productId: '3',
    img: bread,
    title: 'Bruchetta',
    price: '6.50',
    description: `Some random description of a meal with lots of ingredients and so on.
  And lot lot more and delicious.Some random description of a meal with lots of ingredients and so on.
  And lot lot more and delicious.`,
  },
];

const Specials = () => {
  return (
    <section className="specials content-container">
      <header>
        <h2>This week specials!</h2>
        <Button label="Online Menu" />
      </header>
      <div className="specials-list">
        {specialsData.map(
          ({
            productId,
            img,
            title,
            price,
            description,
          }) => (
            <MealCard
              key={productId}
              img={img}
              title={title}
              price={price}
              description={description}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Specials;

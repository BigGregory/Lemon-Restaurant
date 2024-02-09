import adrian from '../assets/adrian.jpeg';
import mario from '../assets/mario.jpeg';

const About = () => {
  return (
    <section className="about content-container">
      <div className="about-content-container">
        <h2>Little Lemon</h2>
        <div>Chicago</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          debitis quod vel voluptate aut culpa similique eaque ratione maiores
          aperiam dignissimos unde, fugiat sed facilis, quibusdam ullam, non
          beatae cupiditate!
        </p>
      </div>
      <div className="about-photo-container">
        <img className="owner-1" src={adrian} alt="owner photo" />
        <img className="owner-2" src={mario} alt="owner photo" />
      </div>
    </section>
  );
};

export default About;

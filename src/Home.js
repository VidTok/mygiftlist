import { useState } from 'react';
import { homeData } from './homeData';

function Home () {

  const description = "Декор для дому — обожнюю! Всілякі свічки, аромати для дому, кераміка, в'язані корзинки, скрині, скатертини та серветки, посуд...натуральні кольори та матеріали, — це все просто моя слабкість. Також люблю те, що можна зробити руками, всілякі набори мозаїки, кінцугі, макроме, — моя тема. Сюди ж іде вінтажна майолика українськіх заводів, — в саме серденько.";
  const [showMore, setShowMore] = useState (false);

  const [home, setHome] = useState (0);
  const {product, image, price, link} = homeData[home];

  const previousHome = () => {
    setHome (home => {
      home --;
      if (home < 0) {
        return homeData.length -1;
      }
      return home;      
    })
  }

  const nextHome = () => {
    setHome (home => {
      home ++;
      if (home > homeData.length -1) {
        home = 0;
      }
      return home;
    })
  }
  
  return (
    <div className='container'>

      <div>
        <h2>Декор</h2>
      </div>

      <div>
        <p className='descriptionPar'>
          {showMore ? description : description.substring(0, 150) + "...."}
          <button className='showMoreBtn' onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
        </p>
      </div>

      <div>
          <h3>{product}</h3>
      </div>

      <div className='giftContainer'>

        <div>
          <button className='prevNextBtn prevBtn' onClick={previousHome}>Назад</button>
        </div>
        
        <div>
          <img className='giftImg' src={image} alt='Home' />
        </div>

        <div>
          <button className='prevNextBtn nextBtn' onClick={nextHome}>Далі</button>
        </div>
        
      </div>

      <div>
        <p className='price'>{price}</p>
      </div>

      <div>
        <a className='buyBtn' href={link} target='blank'>Замовити</a>
      </div>
                
    </div>
  );
}

export default Home;

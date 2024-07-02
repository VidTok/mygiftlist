import { useState } from 'react';
import { accessoriesData } from './accessoriesData';

function Accessories () {

  const description = "Останнім часом, мене дуже вабить поєднання сучасного стилю, з елементами українського традиційного, в прикрасах та вбранні. Коралі, зґради, гердани, силянки, сережни-лунниці, дукачі, ягнуски, кризи, вишиті комірці та горловички, — це все може стати неймовірним подарунком для мене. Так само як і модерні хустки, сумочки з традиційними мотивами. Окрім цього, я обожнюю рослинну тематику: речі прикрашені принтами зелених трав, квітів, — це просто топ! Декілька прикладів можна побачити в слайдах, але можете сміливо цим не обмежуватись!";
  const [showMore, setShowMore] = useState (false);

  const [accessories, setAccessories] = useState (0);
  const {product, image, price, link} = accessoriesData[accessories];

  const previousAccessory = () => {
    setAccessories (accessories => {
      accessories --;
      if (accessories < 0) {
        return accessoriesData.length -1;
      }
      return accessories;      
    })
  }

  const nextAccessory = () => {
    setAccessories (accessories => {
      accessories ++;
      if (accessories > accessoriesData.length -1) {
        accessories = 0;
      }
      return accessories;
    })
  }
  
  return (
    <div className='container'>

      <div>
        <h2>Аксесуари</h2>
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
          <button className='prevNextBtn prevBtn' onClick={previousAccessory}>Назад</button>
        </div>
        
        <div>
          <img className='giftImg' src={image} alt='Earrring' />
        </div>

        <div>
          <button className='prevNextBtn nextBtn' onClick={nextAccessory}>Далі</button>
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

export default Accessories;

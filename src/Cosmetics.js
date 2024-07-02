import { useState } from 'react';
import { cosmeticsData } from './cosmeticsData';

function Cosmetics () {

  const description = "Ну і, звісно, як же ж без косметики))) З декоративної, останнім часом, мені подобається бренд Sheglam. Також завжди актуальні всілякі доглядові креми, маски, тоніки, скраби. Догляд для волосся — то взагалі прірва — завжди треба. Мені підходить все зволожуюче, не обтяжливе. Окрім цього, звісно, парфуми: моно-аромати, з яскравою нотою я просто колекціоную!";
  const [showMore, setShowMore] = useState (false);

  const [cosmetics, setCosmetics] = useState (0);
  const {product, image, price, link} = cosmeticsData[cosmetics];

  const previousCosmetics = () => {
    setCosmetics (cosmetics => {
      cosmetics --;
      if (cosmetics < 0) {
        return cosmeticsData.length -1;
      }
      return cosmetics;      
    })
  }

  const nextCosmetics = () => {
    setCosmetics (cosmetics => {
      cosmetics ++;
      if (cosmetics > cosmeticsData.length -1) {
        cosmetics = 0;
      }
      return cosmetics;
    })
  }
  
  return (
    <div className='container'>

      <div>
        <h2>Косметика</h2>
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
          <button className='prevNextBtn prevBtn' onClick={previousCosmetics}>Назад</button>
        </div>
        
        <div>
          <img className='giftImg' src={image} alt='Cosmetics' />
        </div>

        <div>
          <button className='prevNextBtn nextBtn' onClick={nextCosmetics}>Далі</button>
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

export default Cosmetics;

import './App.css';
import { useState } from 'react';
import Accessories from './Accessories';
import Cosmetics from './Cosmetics';
import Home from './Home';

function App() {

  const giftsArray = [<Accessories />, <Cosmetics />, <Home />];

  const [gifts, setGifts] = useState(giftsArray);

  const removeOne = (index) => {
    let giftsOneDeletedArray = gifts.filter((oneGift, position) => position !== index);
    setGifts(giftsOneDeletedArray);
   }

  return (
    <div>

      <div className='headContainer'>
        <h1>"{gifts.length}" НАПРЯМКИ ПОДАРУНКІВ</h1>
      </div>

      {gifts.map ((item, index) => {

        return (
          <div key={index}>
            <div>{item}</div>
            <div className='btnDltContainer'>
              <button className='dltBnt' onClick={() => removeOne(index)}>Очистити розділ</button>
            </div>
          </div>
        )
      }

      )}

      <div className='clearAllContainer'>
        <button className='clearAllBnt' onClick={() => setGifts ([])}>CLEAR ALL</button>
      </div>

    </div>
  );
  
}

export default App;
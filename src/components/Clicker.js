import '../styles/Clicker.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../features/counterSlice'

const Clicker = () => {

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch()

  //https://math.stackexchange.com/questions/3065779/how-can-i-mathematically-model-and-analyze-an-incremental-game-like-cookie-click

  //Price = Base Cost x 1.15(M-F)
  //M - the number of that type of building currently owned;
  //F - the number of that type of building you have for free (cursors and grandmas you get from Starter kit and Starter kitchen prestige upgrades.)

  // Price of Buy 10 - Price x 20.303718238
  // Price of Buy 100 - Price x 7828749.671335256

  // Building No.| Unit Price	Total| Cookies Needed
  //       1	       1	              1
  //       2	       1.15	            2.15
  //       3	       1.3225	          3.4725
  //       4	       1.5209	          4.9934
  //       5	       1.749	          6.7424
  //       6	       2.0114	          8.7537

  //Laymans terms -  this translates roughly to a doubling of price every 5 buildings, and a thousand increase every 50.

  //create surface to be clicked an infinite amount of times
  //create counter to keep track of how many times you have clicked

  return (
    <div className="App">
      <header className="App-header">
        <section className="counter">
          { count }
        </section>
        <section className="clicker" onClick={() => dispatch(increment())}>
          Clicker
        </section>
      </header> 
    </div>
  );
}

export default Clicker;

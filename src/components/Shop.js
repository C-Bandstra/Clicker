import '../styles/Shop.css'
import { useSelector, useDispatch } from 'react-redux'
import Pointer from './shopItems/Pointer'
import { decrementByAmount } from '../features/counterSlice'

const Shop = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Shop</h3>
      <section className="shop-options">
        <div onClick={() => dispatch(decrementByAmount(15))}>{ count >= 15 ? <Pointer /> : ""}</div>
      </section>
    </div>
  )
}
export default Shop;
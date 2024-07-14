import { useSelector } from 'react-redux'
import { decrementAsync, incrementAsync } from "../redux/counterSlice.ts"
import { RootState, useAppDispatch } from '../redux/store.ts'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div className="counter">
      <h1 className="count">Count: {count}</h1>
      <button className="increment" onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button className="decrement" onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
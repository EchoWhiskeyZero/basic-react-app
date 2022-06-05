import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import Button from '@mui/material/Button';

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button variant="contained" aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</Button>

        &nbsp;&nbsp;
        <Button variant="contained" aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</Button>

        &nbsp;&nbsp;
        <Button variant="contained" aria-label="Increment by 5" onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</Button>

          <br/><br/>
          <span>{count}</span>
      </div>
    </div>
  )
}
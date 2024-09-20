import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/CounterSlice'




const App = () => {
  // niche jo humne sate.custom.count linka hai isme jo 'custom' hai vo name diya hai humne apnce reducer ko store.js me toh hum usko usi 'custom' name se jananenge means Acces the state using useSelector
 const count =useSelector((state)=>state.custom.count)

 const dispatch=useDispatch()
  return (
    <div style={{display:'grid',justifyContent:'center',alignItems:'center',gap:'20px'}} >
      <h1>Count is {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    
    </div>
  )
}

export default App
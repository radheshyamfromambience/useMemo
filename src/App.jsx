import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(10)
  const [number, setNumber] = useState(100000)

  const calculatesum = ()=>{
    var sum = 0;

    for( let i =0; i <number; i++){
      sum = sum + i;
    }
    console.log("calculatesum called");
    
    return sum;
  }

  const sum1 = useMemo(calculatesum, [number])

  return (
    <>
    {sum1}
    <br />
      {count}
      <button onClick={()=> setCount(count+3)}>Click me</button>
      <br />
      {number}
      <button onClick={()=> setNumber(number+3)}>Click me</button>
    </>
  )
}

export default App

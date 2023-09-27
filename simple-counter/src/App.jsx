import { useEffect, useState } from "react"

import SimpleCounter from "./SimpleCounter"


function App() {
 const [counter, setCounter]=useState(0);

 useEffect(()=> {
  const interval = setInterval(()=>{
    setCounter(counter =>counter +1)
  },1000)
  console.log(counter)

  return ()=> clearInterval(interval)
}, [counter])


  return (
    <>
      <SimpleCounter  
      
        sixSeconds={counter}
        fiveSeconds={counter}
        fourSeconds={counter}
        threeSeconds={counter}
        twoSeconds={counter}
        oneSeconds={counter}
      />
    </>
  )
}

export default App
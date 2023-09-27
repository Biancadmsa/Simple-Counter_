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


function calculateSeconds(aCounter, value){
  return Math.floor(aCounter /value)% 10;
  

}




  return (
    <>
      <SimpleCounter  
      
        sixSeconds={calculateSeconds(counter,100000)}
        fiveSeconds={calculateSeconds(counter,10000)}
        fourSeconds={calculateSeconds(counter,1000)}
        threeSeconds={calculateSeconds(counter,100)}
        twoSeconds={calculateSeconds(counter,10)}
        oneSeconds={calculateSeconds(counter,1)}
      />
    </>
  )
}

export default App
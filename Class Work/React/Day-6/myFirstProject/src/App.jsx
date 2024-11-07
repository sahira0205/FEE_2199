// import { useState } from 'react';
// import './App.css'
// function App(){
//   // let count=0; 
//   let[count,setCount]=useState(0);
//   function inclick(){
// setCount(count+1);
//   }
//   function decclick(){
//  setCount(count-1);
//   }
//   return(
//     <div>
//       <p>Learn useState</p>
//       <h1>{count}</h1>
//       <button onClick={inclick}> Increment</button>
//       <button onClick={decclick}> Decrement</button>
//       </div>
//   )
// }
// export default App

import React, { useState } from 'react'

const App = () => {
  let [random,setRandom]=useState(0)
  function btnclick(){
    let somerandom=Math.random();
    // console.log(somerandom)
    setRandom(somerandom);
  }
  return (
    <div>
  <h1>Random Number</h1>
  <h2>{random}</h2>
  <button onClick={btnclick}>Generate</button>
    </div>
  )
}

export default App
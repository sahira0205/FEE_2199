import React from 'react'

const TernaryOperator = () => {
    let randomNum=Math.floor(Math.random()*5+1);
    let luckyNum=3;
  return (
    <div>
      <h1>Are you one? {randomNum}</h1>
        {randomNum===luckyNum?<img src='https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying-feature.gif'/>:<h1>Oh! no you have a bad luck</h1>}
    </div>
  )
}

export default TernaryOperator
import React from 'react'
import './CoffeeBag.css'
import coffebag from '../../images/BOLSA.png'
import premium from '../../images/premium.png'

function CoffeeBag() {
  return (
    <div>
        <img id='coffee'src={coffebag}></img>
        <img id='premium'src={premium}></img>

    </div>
  )
}

export default CoffeeBag
import React from 'react'
import './Button.css'
import flecha from '../../images/flecha.png'
function Button() {
  return (
    <div id='arrow'>
        <button id='button'>
            <img id='img'src={flecha}></img>  
        </button>
        <div id='tex'>
          <h4 >HARD <br></br></h4>
          <h4 id='work'>WORK</h4>

        </div>
    </div>
  )
}

export default Button
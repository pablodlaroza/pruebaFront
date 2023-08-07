import React from 'react'
import './textBeans.css'
import beans from '../../images/cafe.png'
function TextBeans() {
  return (
    <div>
        <h1 id='titleB'>Una mezcla de cafe <br></br>con notas dulces de <br></br>frutos del bosque.
        </h1>
        <h5 id='paragraph'>A través de un proceso único de tostado y mezcla, hemos marcado 
        los sabores de lo que más amamos. Desarrollando un café a base
        de granos seleccionados y con sabor natural que ofrece un sabor
        dulce y rico para compartir con tu momento preferido.
        </h5>
        <img id='beans' src={beans}></img>
    </div>
  )
}

export default TextBeans
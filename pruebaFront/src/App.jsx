import { useState } from 'react'
import Logo from './components/logo/Logo'
import IdiomButtons from './components/idiomButtons/idiomButtons'
import Cart from './components/cart/Cart'
import CoffeeBag from './components/coffeeBag/CoffeeBag'
import Form from './components/form/Form'
import Button from './components/button/Button'
import TextBeans from './components/textBeans/textBeans'
import logoFooter from './images/logoFooter.png'


function App() {


  return (
    <>
    
      <div className='logo'>
        <Logo/>
      </div>

      <div className="idiomButtons">
        <IdiomButtons/>
      </div>

      <div className="cart">
        <Cart/>
      </div>

      <div className="bag">
        <CoffeeBag/>
      </div>

      <div className="form">
        <Form/>
      </div>
      <div className="flecha">
        <Button/>
      </div>

      <div className="text">
        <TextBeans/>
      </div>
      <div className="logoFooter">
        <img style={{width: 130, marginLeft: 180, position:'absolute', bottom:-665}}src={logoFooter}></img>
      </div>

    </>
  )
}

export default App

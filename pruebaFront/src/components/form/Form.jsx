import React, { useState } from 'react'
import './Form.css'
import circles from '../../images/circles.png'
import carrito from '../../images/carrito.png'
import products from '../../DATA/product.json'
import CarritoDetalle from './CarritoDetail'
import azul from '../../images/azul.png'
import Select from 'react-select';
import lineas from '../../images/lineas.png'



function Form() {
  const options = [
    
    { value: 'small', label: 'Pequeño' },
    { value: 'medium', label: 'Mediano' },
    { value: 'large', label: 'Grande' }
  ];

  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [contadorTemporal, setContadorTemporal] = useState(1);
  const [carritoVisible, setCarritoVisible] = useState(false);
  let price = (contadorTemporal* products.price).toLocaleString();

  const onIncrement = () => {
    setContadorTemporal(contadorTemporal + 1);
  }

  const onDecrement = () => {
    if(contadorTemporal>=1){

      setContadorTemporal(contadorTemporal - 1);
    }
  }

  const agregarAlCarrito = () => {
    if (contadorTemporal > 0) {
      const productoExistenteIndex = productosEnCarrito.findIndex(item => item.nombre == products.name + products.name2);
  
      if (productoExistenteIndex !== -1) {
        const nuevosProductos = [...productosEnCarrito];
        nuevosProductos[productoExistenteIndex].cantidad += contadorTemporal;
        setProductosEnCarrito(nuevosProductos);
      } else {
        const nuevoProducto = {
          nombre: products.name + products.name2,
          cantidad: contadorTemporal,
          price: price,
        };
        setProductosEnCarrito([...productosEnCarrito, nuevoProducto]);
      }
  
      setContadorTemporal(0);
    }
  }
  const eliminarProducto = (index) => {
    const nuevosProductos = [...productosEnCarrito];
    nuevosProductos.splice(index, 1);
    setProductosEnCarrito(nuevosProductos);
  }

  const calcularTotalDefinitivo = () => {
    return productosEnCarrito.reduce((total, producto) => total + producto.cantidad, 0) * products.price;
  }

  const calcularCantidadDefinitiva = () => {
    return productosEnCarrito.reduce((total, producto) => total + producto.cantidad, 0);
  }

  return (
    <div id='form'>
        <h6 className='poppinsP' id='category'> {products.category}</h6>
        <h1>{products.name}</h1>
        <h1 className='ENERGYY'>{products.name2}</h1>
        <img src={azul} alt="" className="azul" />
        
        <h6 className='poppinsP'id='roast' > R O A S T</h6>
        <img id ='circles'src={circles}></img>
        <h6 id='roastt'className='popnsP'> {products.roast}</h6>

        <h6 id='taste'className='poppinsP'> T A S T E</h6>
        <p id='tastee'>{products.taste}</p>


      <h6 id='bag'className='poppinsP'> B A G </h6>
      <h6 id='size'className='poppinsP'>  S I Z E</h6>
      <div>
        
        <Select  id='select' options={options} placeholder="Please Select"/>
    </div>

      <div className="add">
      <img id='lineas' src={lineas}></img>

        <h2 id='amount'>{contadorTemporal}</h2>

        <button id='plus'onClick={onIncrement}>+</button>
        <button id='minus'onClick={onDecrement}>_</button>

        <h2 id='price'>${price}</h2>
        <p id='pp'>Tenemos envios a domicilio en Bogotá, Cali, <br></br> Monteria, Neiva, Soledad y Valledupar.</p>
        
        <button id='addd'onClick={agregarAlCarrito}>AÑADIR AL CARRITO</button>

      </div>
      


      <div id='carrito'>
      <button id='carritoButton' onClick={() => setCarritoVisible(!carritoVisible)} className="cart poppinsP">
        CARRITO <img style={{width:19, position:'absolute',right:10, top:10}}src={carrito} />
        
      </button>
      <div className="carrito-count">
          <span>{productosEnCarrito.length}</span>
      </div>
      {carritoVisible && (
        <div id='carritoMenu'>
          {/* Renderizar el carrito solo si hay productos */}
          {productosEnCarrito.length > 0 ? (
            <div>
              <CarritoDetalle onEliminarProducto={eliminarProducto} productosEnCarrito={productosEnCarrito}/>
              {/* <p>Cantidad Definitiva: {calcularCantidadDefinitiva()}</p> */}
              <p>Total  ${calcularTotalDefinitivo().toLocaleString()}</p>
            </div>
          ) : (
            <h5>No tienes ningún producto en el carrito.</h5>
          )}
        </div>
      )}
    </div>


    </div>
  )
}

export default Form
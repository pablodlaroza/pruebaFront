import React from 'react';

function CarritoDetalle({ productosEnCarrito,  onEliminarProducto }) {
  return (
    <div >
      <h4>Productos en el Carrito</h4>
      <ul>
        {productosEnCarrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre}: {producto.cantidad}
     
            <button style={{marginLeft:10, borderRadius:4, backgroundColor:'red', color:'white'}} onClick={() => onEliminarProducto(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarritoDetalle;
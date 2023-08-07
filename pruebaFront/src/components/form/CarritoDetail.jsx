import React from 'react';
import bolsa from '../../images/BOLSA.png';

function CarritoDetalle({ productosEnCarrito, onEliminarProducto }) {
  return (
    <div>
      <h4>Productos en el Carrito</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {productosEnCarrito.map((producto, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px', // Espacio entre los elementos <li>
              padding: '10px', // Espacio interno de cada elemento <li>
              border: '1px solid #ccc', // Borde alrededor del elemento <li>
              borderRadius: '4px' // Bordes redondeados
            }}
          >
            <img style={{ width: 12, marginRight: 10 }} src={bolsa} alt="Bolsa" />
            {producto.cantidad} {producto.nombre} {producto.nombre2}
            <button
              style={{ marginLeft: 35, borderRadius: 4, backgroundColor: 'red', color: 'white', cursor: 'pointer' }}
              onClick={() => onEliminarProducto(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarritoDetalle;

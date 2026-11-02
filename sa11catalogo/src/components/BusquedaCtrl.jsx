import { useState } from 'react'

function BusquedaCtrl({ productos = [], onSeleccionarProducto }) {
//Para guardar en tiempo real lo que el usuario escribe en el buscador//

  const [busqueda, setBusqueda] = useState('')
  //Filtro la lista pasando todo a minusculas para que no importe si 
  // escriben con MAYUSCULA o minuscula

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <section className="curso">
        <h2>Catálogo de Búsqueda Interactiva</h2>
          <label htmlFor="buscar">
          <strong>Buscar producto: </strong></label>
          {/*el evento onChange, captura cada letra que escribo con e.target.value */}
          <input
            id="buscar"
            type="text"
            placeholder="Escribe el nombre del producto"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

        <section>
          {productosFiltrados.length > 0 ? (
            /*Si no hay nada que coincida, salta el mensaje de error de abajo */

            productosFiltrados.map((producto) => (
                 /*Uso .map() para clonar las tarjetas y les pongo su key unica con el id */

              <article key={producto.id}>
                <h3>{producto.nombre}</h3>
                <p>{producto.desc}</p>
                <p className="precio">{producto.precio}</p>


                 {/* aquí el evento onClick, al hacer clic ejecuta el callback y manda 
                 el nombre del producto al padre */}
                <button onClick={() => onSeleccionarProducto(producto.nombre)}>
                  Seleccionar
                </button>
              </article>
            ))
          ) : (
             // Aca se prueba el caso de un producto inexistente
            <p style={{ color: 'red', fontWeight: 'bold' }}>
                No se encontraron productos coincidentes.
            </p>
          )}
        </section>
      </section>
    </>
  )
}

export default BusquedaCtrl


import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'
import BusquedaCtrl from './components/BusquedaCtrl'

const MIS_PRODUCTOS = [
  { id: 1, nombre: 'Laptop HP', desc: 'Computadora ideal para estudiar y trabajar.', precio: 'S/ 2,500' },
  { id: 2, nombre: 'Audífonos Bluetooth', desc: 'Audífonos inalámbricos con sonido de calidad.', precio: 'S/ 120' },
  { id: 3, nombre: 'Teclado mecánico', desc: 'Teclado ideal para videojuegos y trabajo.', precio: 'S/ 180' },
  { id: 4, nombre: 'Mouse inalámbrico', desc: 'Mouse cómodo y práctico para tu computadora.', precio: 'S/ 65' },
  { id: 5, nombre: 'Smartphone Samsung', desc: 'Teléfono inteligente con cámara de alta calidad.', precio: 'S/ 1,200' },
  { id: 6, nombre: 'Tablet Lenovo', desc: 'Dispositivo práctico para leer y estudiar.', precio: 'S/ 850' }
]

function App() {
  {/*aquí guardo el producto que el usuario selecciona para mostrarlo arriba*/}
   const [productoSeleccionado, setProductoSeleccionado] = useState('Ninguno')

  return (
    <>
      <Header/>
      <Nav/>

      <p style={{ color: 'green', background: '#e2f0d9'}}>
        <strong>Producto Seleccionado en el Catálogo:</strong> {productoSeleccionado}
      </p>

      <Main/>
      {/*acá use los props y el callback, con productos le paso la lista de arriba al hijo.
        Con onSeleccionarProducto el hijo me avisa qué boton presionaron y me manda el dato.
      */}
      
      <BusquedaCtrl 
        productos={MIS_PRODUCTOS} onSeleccionarProducto={(nombre) => setProductoSeleccionado(nombre)} 
      />
      <Aside/>
      <Footer/>

    </>
  )
}

export default App

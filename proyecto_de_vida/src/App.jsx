import './App.css'

export function App () {
  return (
    <>
      <ul className='h-screen'>
        <li className='bible flex items-center justify-center flex-col h-1/3'>
          <h3 className='cursor-default p-2 text-white font-bold text-lg'>IGLESIA</h3>
          <button className='text-white font-bold text-lg'>Ir a &#10142;</button>
        </li>
        <li className='cross flex items-center justify-center flex-col h-1/3'>
          <h3 className='cursor-default p-2 text-white font-bold text-lg'>ENCUENTROS</h3>
          <button className='text-white font-bold text-lg'>Ir a &#10142;</button>
        </li>
        <li className='people flex items-center justify-center flex-col h-1/3'>
          <h3 className='cursor-default p-2 text-white font-bold text-lg'>CONTACTO</h3>
          <button className='text-white font-bold text-lg'>Ir a &#10142;</button>
        </li>
      </ul>
      <footer className='text-center text-white bg-black'>
        <p>©️ Todos los derechos reservados</p>
      </footer>
    </>
  )
}

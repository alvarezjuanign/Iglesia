import church from './assets/church.svg'
import calendar from './assets/calendar.svg'
import phone from './assets/chat.svg'
import logo from './assets/LOGO SIN FONDO.png'

export function App () {
  return (
    <body>
      <header className='h-1/2'>
        <nav className='w-screen flex flex-col items-center'>
          <ul className='w-[90%] mt-8 flex justify-center items-center h-16 bg-gray-500 opacity-75 gap-8 shadow-lg rounded-md text-white'>
            <li>
              <a href='#home' className='flex flex-col justify-center items-center'>
                <img src={church} className='h-6' />
                Inicio
              </a>
            </li>
            <li>
              <a href='#schedule' className='flex flex-col justify-center items-center'>
                <img src={calendar} className='h-6' />
                Encuentros
              </a>
            </li>
            <li>
              <a href='#contact' className='flex flex-col justify-center items-center'>
                <img src={phone} className='h-6' />
                Contacto
              </a>
            </li>
          </ul>
          <img src={logo} className='drop-shadow-lg max-h-[600px]' />
        </nav>
      </header>
    </body>
  )
}

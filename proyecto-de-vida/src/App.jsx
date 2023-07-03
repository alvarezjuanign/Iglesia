import church from './assets/church.svg'
import phone from './assets/chat.svg'
import clock from './assets/clock.svg'
import logo from './assets/logo.png'
import facebookLogo from './assets/facebook.svg'
import locationLogo from './assets/location.svg'

export function App () {
  return (
    <body className='bg-[#edebeb]'>
      <main className='h-screen' id='home'>
        <header>
          <nav className='flex flex-col items-center'>
            <ul className='w-[95%] mt-2 flex justify-evenly items-center h-16 bg-gray-500/70 gap-8 shadow-lg rounded-md'>
              <li>
                <a href='#home' className='flex flex-col justify-center items-center'>
                  <img src={church} className='h-6' />
                  <p className='font-extrabold'>Inicio</p>
                </a>
              </li>
              <li>
                <a href='#contact' className='flex flex-col justify-center items-center'>
                  <img src={phone} className='h-6' />
                  <p className='font-extrabold'>Contacto</p>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section className='h-screen flex flex-col items-center gap-5 mt-4 '>
          <img src={logo} alt='logo de la iglesia' className='drop-shadow-lg h-80' />
          <div className='m-1 animate-fade-right animate-once animate-duration-1000 animate-ease-in-out'>
            <h3 className='font-semibold text-xl text-center underline m-2 cursor-default'>Virtual</h3>
            <div>
              <a href='https://www.facebook.com/jose.zavaleta.169405' className='flex justify-center items-center gap-6 bg-[#77C6CD]/60 rounded-md shadow-lg h-32 p-3'>
                <div className='flex flex-col items-center p-3'>
                  <img src={clock} alt='clock' className='h-14' />
                  <strong>Miércoles</strong>
                  <p>19:00 hs.</p>
                </div>
                <div className='flex flex-col items-center p-3'>
                  <img src={clock} alt='clock' className='h-14' />
                  <strong>Viernes</strong>
                  <p>19:00 hs.</p>
                </div>
              </a>
            </div>
          </div>

          <div className='animate-fade-left animate-once animate-duration-1000 animate-ease-in-out'>
            <h3 className='font-semibold text-xl text-center underline m-2 cursor-default'>Presencial</h3>
            <div className='flex flex-col items-center bg-[#77C6CD]/60 rounded-md shadow-lg h-32 p-3 cursor-default'>
              <img src={clock} alt='clock' className='h-14' />
              <strong>Domingo</strong>
              <p>10:00 hs.</p>
            </div>
          </div>
          <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76' className='text-center'>
            📍<strong className='text-xl hover:underline'>Mercedes 918 - CABA</strong>
          </a>
        </section>
      </main>

      <footer id='contact' className='bg-gray-500/75 h-28 flex flex-col items-center justify-center gap-3'>
        <div className='flex justify-center gap-4'>
          <a href='https://www.facebook.com/iglesiadedios.florestanorte'><img src={facebookLogo} alt='ícono de facebook' className='h-6' /></a>
          <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76'><img src={locationLogo} alt='ícono de ubicación' className='h-6' /></a>
        </div>
        <p className='text-center font-semibold'>©️ 2023. Proyecto de Vida todos los derechos reservados.</p>
      </footer>
    </body>
  )
}

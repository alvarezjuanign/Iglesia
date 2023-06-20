import church from './assets/church.svg'
import gallery from './assets/gallery.svg'
import phone from './assets/chat.svg'
import clock from './assets/clock.svg'
import logo from './assets/logo.png'

export function App () {
  return (
    <body>
      <main className='h-screen' id='home'>
        <header>
          <nav className='flex flex-col items-center'>
            <ul className='w-[90%] mt-6 flex justify-evenly items-center h-16 bg-gray-500/75 gap-8 shadow-lg rounded-md text-white'>
              <li>
                <a href='#home' className='flex flex-col justify-center items-center'>
                  <img src={church} className='h-6' />
                  <p>Inicio</p>
                </a>
              </li>
              <li>
                <a href='#gallery' className='flex flex-col justify-center items-center'>
                  <img src={gallery} className='h-6' />
                  <p>Galería</p>
                </a>
              </li>
              <li>
                <a href='#contact' className='flex flex-col justify-center items-center'>
                  <img src={phone} className='h-6' />
                  <p>Contacto</p>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section className='h-screen flex flex-col items-center gap-5 mt-16'>
          <img src={logo} alt='logo de la iglesia' className='drop-shadow-lg h-80' />
          <div className='m-1'>
            <h3 className='font-semibold text-xl text-center text-white underline m-2'>Virtual</h3>
            <div className='flex justify-center items-center gap-6 bg-[#77C6CD]/60 rounded-md shadow-lg h-32 p-3'>
              <div className='flex flex-col items-center text-white p-3'>
                <img src={clock} alt='clock' className='h-14' />
                <strong>Miércoles</strong>
                <p>19:00 hs.</p>
              </div>
              <div className='flex flex-col items-center text-white p-3'>
                <img src={clock} alt='clock' className='h-14' />
                <strong>Viernes</strong>
                <p>19:00 hs.</p>
              </div>
            </div>
          </div>

          <div className='m-1'>
            <h3 className='font-semibold text-xl text-center text-white underline m-2'>Presencial</h3>
            <div className='flex flex-col items-center text-white bg-[#77C6CD]/60 rounded-md shadow-lg h-32 p-3'>
              <img src={clock} alt='clock' className='h-14' />
              <strong>Domingo</strong>
              <p>10:00 hs.</p>
            </div>
          </div>
          <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76' className='text-center'>
            📍<strong className='text-white text-xl hover:underline'>Mercedes 918 - CABA</strong>
          </a>
        </section>
      </main>

      <section className='mt-7 mx-[10%]' id='gallery'>
        <div className='grid gap-7 grid-cols-2 justify-stretch place-items-stretch'>
          <div className='bg-white h-48' />
          <div className='bg-red-300 h-48' />
          <div className='bg-red-700 h-48' />
          <div className='bg-amber-300 h-48' />
          <div className='bg-lime-500 h-48' />
          <div className='bg-teal-500 h-48' />
          <div className='bg-indigo-700 h-48' />
          <div className='bg-pink-400 h-48' />
          <div className='bg-blue-800 h-48' />
          <div className='bg-orange-600 h-48' />
        </div>
      </section>
    </body>
  )
}

import logoIglesia from '../assets/logo.webp'
import iglesia from '../assets/iglesia.jpg'
import virtual from '../assets/virtual.jpg'

export function Header () {
  return (
    <header className='flex flex-col items-center p-10'>
      <div className='flex flex-col items-center justify-center gap-5 h-screen max-w-screen-lg md:flex-row'>
        <picture>
          <img
            src={logoIglesia}
            alt='logo de la iglesia'
            className='max-w-xs'
          />
        </picture>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-center mx-[5%] [text-wrap:balance]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum iste perspiciatis vitae atque nobis asperiores! Ad blanditiis itaque suscipit in consectetur vitae. Consectetur voluptatum qui quod nam, quos quas.</p>
          <button
            className='h-14 w-56 border border-[#77C6CD]/60 rounded-full py-1 px-3 bg-[#77C6CD]/60 duration-500 hover:shadow-lg hover:scale-110 active:scale-100'
          >
            <a
              href='https://www.facebook.com/iglesiadedios.florestanorte'
              className='font-bold'
            >
              CONOCENOS!!
            </a>
          </button>

          <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76'>
            📍<strong className='text-2xl hover:underline'>Mercedes 918 - CABA</strong>
          </a>
        </div>
      </div>

      <section className='flex flex-col items-center'>
        <article className='flex flex-col justify-center gap-5 my-4 md:flex-row'>
          <div class='max-w-xs bg-white border border-gray-200 rounded-lg shadow'>
            <a href='https://www.facebook.com/jose.zavaleta.169405'>
              <img class='rounded-t-lg' src={virtual} alt='imagen ilustrativa de encuentros virtuales' />
              <div class='p-5'>
                <h2 class='mb-2 text-2xl text-center'>Virtual</h2>
                <p class='mb-3 text-center font-normal'>Miércoles y Viernes 19:00 hs.</p>
              </div>
            </a>
          </div>

          <div class='max-w-xs bg-white border border-gray-200 rounded-lg shadow'>
            <a href='https://www.facebook.com/iglesiadedios.florestanorte'>
              <img class='rounded-t-lg' src={iglesia} alt='imagen ilustrativa de encuentros en la iglesia' />
              <div class='p-5'>
                <h2 class='mb-2 text-2xl text-center'>Presencial</h2>
                <p class='mb-3 text-center font-normal'>Domingo 10:00 hs.</p>
              </div>
            </a>
          </div>
        </article>
      </section>
    </header>
  )
}

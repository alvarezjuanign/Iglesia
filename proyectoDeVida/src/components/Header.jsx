import logoIglesia from '../assets/logo.webp'
import clock from '../assets/clock.svg'

export function Header () {
  return (
    <header className='flex flex-col items-center p-10'>
      <div className='flex flex-col items-center justify-center gap-4 h-screen md:flex-row'>
        <picture>
          <img
            src={logoIglesia}
            alt='logo de la iglesia'
            className='flex-auto max-w-xs'
          />
        </picture>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-center mx-[5%] [text-wrap:balance]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum iste perspiciatis vitae atque nobis asperiores! Ad blanditiis itaque suscipit in consectetur vitae. Consectetur voluptatum qui quod nam, quos quas.</p>
          <button
            className='h-14 w-56 border border-[#77C6CD]/60 rounded-full py-1 px-3 bg-[#77C6CD]/60 duration-500 hover:shadow-lg hover:scale-110 active:scale-100'
          >
            <a
              href='https://www.facebook.com/jose.zavaleta.169405'
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
          <div>
            <h3 className='font-semibold text-lg text-center cursor-default'>Virtual</h3>
            <div>
              <a href='https://www.facebook.com/jose.zavaleta.169405' className='flex justify-center items-center gap-4 bg-[#77C6CD]/50 rounded-md shadow-lg h-32'>
                <div className='flex flex-col items-center p-3'>
                  <img src={clock} alt='clock' className='h-12' />
                  <strong>Miércoles</strong>
                  <p>19:00 hs.</p>
                </div>
                <div className='flex flex-col items-center p-3'>
                  <img src={clock} alt='clock' className='h-12' />
                  <strong>Viernes</strong>
                  <p>19:00 hs.</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className='font-semibold text-lg text-center cursor-default'>Presencial</h3>
            <div className='flex flex-col items-center bg-[#77C6CD]/50 rounded-md shadow-lg h-32 p-3 cursor-default'>
              <img src={clock} alt='clock' className='h-12' />
              <strong>Domingo</strong>
              <p>10:00 hs.</p>
            </div>
          </div>
        </article>
      </section>
    </header>
  )
}

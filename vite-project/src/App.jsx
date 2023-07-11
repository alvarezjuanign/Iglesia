import { About } from './components/About.jsx'

export function App () {
  return (
    <main className='w-full bg-[#edebeb]'>
      <div className='flex flex-col items-center p-10'>
        <header className='flex flex-col items-center justify-center gap-4 h-screen'>
          <picture>
            <img
              src='./assets/logo.webp'
              alt='logo de la iglesia'
              className='h-32'
            />
          </picture>
          <h1 className='font-bold text-2xl'>Iglesia Proyecto de Vida</h1>
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
        </header>

        <section className='flex flex-col items-center h-screen'>
          <article className='flex flex-col justify-center gap-5 my-4 md:flex-row'>
            <div>
              <h3 className='font-semibold text-lg text-center cursor-default'>Virtual</h3>
              <div>
                <a href='https://www.facebook.com/jose.zavaleta.169405' className='flex justify-center items-center gap-4 bg-[#77C6CD]/50 rounded-md shadow-lg h-32'>
                  <div className='flex flex-col items-center p-3'>
                    <img src='./assets/clock.svg' alt='clock' className='h-12' />
                    <strong>Miércoles</strong>
                    <p>19:00 hs.</p>
                  </div>
                  <div className='flex flex-col items-center p-3'>
                    <img src='./assets/clock.svg' alt='clock' className='h-12' />
                    <strong>Viernes</strong>
                    <p>19:00 hs.</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className='font-semibold text-lg text-center cursor-default'>Presencial</h3>
              <div className='flex flex-col items-center bg-[#77C6CD]/50 rounded-md shadow-lg h-32 p-3 cursor-default'>
                <img src='./assets/clock.svg' alt='clock' className='h-12' />
                <strong>Domingo</strong>
                <p>10:00 hs.</p>
              </div>
            </div>
          </article>
        </section>
      </div>

      <About
        animation='animate-fade-right animate-once animate-duration-[2000ms] animate-delay-200 animate-ease-in-out'
      >
        <img
          src=''
          alt=''
          className='rounded-md'
        />
        <figcaption className='font-bold text-lg'>'Nuestros jóvenes'</figcaption>
        <p className='text-center [text-wrap:balance]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, neque aspernatur cupiditate architecto quos commodi. Fuga quidem libero ad ipsam, ea ratione beatae repudiandae blanditiis perferendis non, architecto exercitationem cum!</p>
      </About>
      <About
        animation='animate-fade-left animate-once animate-duration-[2000ms] animate-delay-200 animate-ease-in-out'
      >
        <img
          src=''
          alt=''
          className='rounded-md'
        />
        <figcaption className='font-bold text-lg'>'Encuentros en la Iglesia'</figcaption>
        <p className='text-center [text-wrap:balance]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, neque aspernatur cupiditate architecto quos commodi. Fuga quidem libero ad ipsam, ea ratione beatae repudiandae blanditiis perferendis non, architecto exercitationem cum!</p>
      </About>
      <About
        animation='animate-fade-right animate-once animate-duration-[2000ms] animate-delay-200 animate-ease-in-out'
      >
        <img
          src=''
          alt=''
          className='rounded-md'
        />
        <figcaption className='font-bold text-lg'>'Compartiendo momentos'</figcaption>
        <p className='text-center [text-wrap:balance]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, neque aspernatur cupiditate architecto quos commodi. Fuga quidem libero ad ipsam, ea ratione beatae repudiandae blanditiis perferendis non, architecto exercitationem cum!</p>
      </About>

      <footer id='contact' className='bg-[#77C6CD]/50 h-28 flex flex-col items-center justify-center gap-3'>
        <div className='flex justify-center gap-4'>
          <a href='https://www.facebook.com/iglesiadedios.florestanorte'>
            <img src='../../facebook.svg' alt='ícono de facebook' className='h-6' />
          </a>
          <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76'>
            <img src='../../location.svg' alt='ícono de ubicación' className='h-6' />
          </a>
        </div>
        <p className='text-center font-semibold'>©️ 2023. Proyecto de Vida todos los derechos reservados.</p>
      </footer>
    </main>
  )
}

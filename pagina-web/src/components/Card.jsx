import clockSvg from '../../public/clock.svg'

export function Home () {
  return (
    <main className='w-screen'>
      <div className='bg-[#edebeb] flex flex-col gap-24 items-center'>
        <header className='h-1/2 flex flex-col items-center gap-4 pt-14'>
          <picture>
            <img
              src='../../public/logo.webp'
              alt='logo de la iglesia'
              className='drop-shadow-lg h-32'
            />
          </picture>
          <h1 className='text-center font-bold text-2xl'>Iglesia Proyecto de Vida</h1>
          <p className='text-center mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum iste perspiciatis vitae atque nobis asperiores! Ad blanditiis itaque suscipit in consectetur vitae. Consectetur voluptatum qui quod nam, quos quas.</p>
          <button
            className='border border-[#77C6CD]/60 rounded-lg py-1 px-3 hover:bg-[#77C6CD]/60 transition-all animate-duration-1000 hover:shadow-lg hover:scale-110'
          >
            <a
              href='https://www.facebook.com/jose.zavaleta.169405'
              className='font-bold'
            >
              CONOCENOS!!
            </a>
          </button>
        </header>

        <section className='flex flex-col items-center my-11'>
          <picture>
            <img
              src='../../public/encuentros.webp'
              alt='foto de los encuentros en la iglesia'
              className='h-60 rounded-md'
            />
          </picture>

          <article className='flex justify-center gap-10 m-10'>
            <div>
              <h3 className='font-semibold text-lg text-center m-2 cursor-default'>Virtual</h3>
              <div>
                <a href='https://www.facebook.com/jose.zavaleta.169405' className='flex justify-center items-center gap-4 bg-[#77C6CD]/50 rounded-md shadow-lg h-32 p-3'>
                  <div className='flex flex-col items-center p-3'>
                    <img src={clockSvg} alt='clock' className='h-12' />
                    <strong>Miércoles</strong>
                    <p>19:00 hs.</p>
                  </div>
                  <div className='flex flex-col items-center p-3'>
                    <img src={clockSvg} alt='clock' className='h-12' />
                    <strong>Viernes</strong>
                    <p>19:00 hs.</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className='font-semibold text-lg text-center m-2 cursor-default'>Presencial</h3>
              <div className='flex flex-col items-center bg-[#77C6CD]/50 rounded-md shadow-lg h-32 p-3 cursor-default'>
                <img src={clockSvg} alt='clock' className='h-12' />
                <strong>Domingo</strong>
                <p>10:00 hs.</p>
              </div>
            </div>
          </article>
          <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76'>
            📍<strong className='text-2xl hover:underline'>Mercedes 918 - CABA</strong>
          </a>
        </section>
      </div>

      <footer id='contact' className='bg-gray-500/75 h-28 flex flex-col items-center justify-center gap-3'>
        <div className='flex justify-center gap-4'>
          <a href='https://www.facebook.com/iglesiadedios.florestanorte'><img src='' alt='ícono de facebook' className='h-6' /></a>
          <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76'><img src='' alt='ícono de ubicación' className='h-6' /></a>
        </div>
        <p className='text-center font-semibold'>©️ 2023. Proyecto de Vida todos los derechos reservados.</p>
      </footer>
    </main>
  )
}

import clockSvg from '../../clock.svg'

export function Home () {
  return (
    <main className='w-full bg-[#edebeb]'>
      <div className='flex flex-col gap-24 items-center'>
        <header className='h-1/2 flex flex-col items-center gap-4 pt-14'>
          <picture>
            <img
              src='../../logo.webp'
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
              src='../../encuentros.webp'
              alt='foto de los encuentros en la iglesia'
              className='h-60 rounded-md'
            />
          </picture>

          <article className='flex flex-col justify-center gap-10 m-10'>
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

      <section className='p-6 bg-neutral-300 flex flex-col items-center'>
        <figure className='flex flex-col items-center'>
          <img src='https://scontent.faep8-1.fna.fbcdn.net/v/t1.6435-9/39676124_966966570173251_8276950468190535680_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A7XZNdXOzBwAX92_k9A&_nc_oc=AQnYyxrkMdznfSDQFH3LK_eFnsGz-B35jdopFoKA4VkMfyd1_fHf5MVbZxnxHoG5pUM&_nc_ht=scontent.faep8-1.fna&oh=00_AfA-7okkBtCFnncSjRui7937CMBasGVO2_d3P0NUXpguRA&oe=64CE9CC8' alt='' />
          <figcaption>Encuentros en la Iglesia</figcaption>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid, quos, saepe repellendus dicta neque mollitia harum reprehenderit a tenetur sint provident rem omnis sunt natus, voluptatibus impedit nesciunt eligendi!</p>
        </figure>
        <figure className='flex flex-col items-center'>
          <img src='https://scontent.faep8-3.fna.fbcdn.net/v/t1.6435-9/89972379_1381093502093887_3928487271459717120_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UHDDPLuw3CgAX9RCYFH&_nc_ht=scontent.faep8-3.fna&oh=00_AfDDvMiDueNXzrHindKF9W65RBL_S9JfoPARFpQVYnne2w&oe=64CE9F0F' alt='' />
          <figcaption>Encuentros en la Iglesia</figcaption>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid, quos, saepe repellendus dicta neque mollitia harum reprehenderit a tenetur sint provident rem omnis sunt natus, voluptatibus impedit nesciunt eligendi!</p>
        </figure>
        <figure className='flex flex-col items-center'>
          <img src='https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/340618905_234415172429762_6663431013710218391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QPTsm2mcMe8AX854nA2&_nc_ht=scontent.faep8-1.fna&oh=00_AfBgBdfyuECEU0bmaqqiOgF7rk7D_FL8-zMRAldtZ45G8w&oe=64AB879D' alt='' />
          <figcaption>Encuentros en la Iglesia</figcaption>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid, quos, saepe repellendus dicta neque mollitia harum reprehenderit a tenetur sint provident rem omnis sunt natus, voluptatibus impedit nesciunt eligendi!</p>
        </figure>
      </section>

      <footer id='contact' className='bg-[#77C6CD]/50 h-28 flex flex-col items-center justify-center gap-3'>
        <div className='flex justify-center gap-4'>
          <a href='https://www.facebook.com/iglesiadedios.florestanorte'><img src='../../facebook.svg' alt='ícono de facebook' className='h-6' /></a>
          <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76'><img src='../../location.svg' alt='ícono de ubicación' className='h-6' /></a>
        </div>
        <p className='text-center font-semibold'>©️ 2023. Proyecto de Vida todos los derechos reservados.</p>
      </footer>
    </main>
  )
}

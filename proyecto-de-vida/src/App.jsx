import { useState } from 'react'
import logo from './assets/LOGO SIN FONDO.png'

export function App () {
  const [opened, setOpened] = useState()

  return (
    <body>
      <nav className='bg-slate-200 w-full h-10 fixed z-20 flex'>
        <img src={logo} className='h-11' />
        <button onClick={() => setOpened(!opened)} className='flex flex-col gap-1 items-center justify-center h-10 cursor-pointer absolute right-2'>
          <div className='bg-black h-1 w-5 rounded' />
          <div className='bg-black h-1 w-5 rounded' />
          <div className='bg-black h-1 w-5 rounded' />
        </button>
      </nav>
      {opened === true &&
        <header className='fixed h-screen w-full flex flex-col justify-center items-center bg-slate-200'>
          <nav>
            <ul>
              <li className='font-bold text-3xl p-4 text-center hover:underline'>
                <a href='#main' onClick={() => setOpened(!opened)}>
                  Inicio
                </a>
              </li>
              <li className='font-bold text-3xl p-4 text-center hover:underline'>
                <a href='#schedule' onClick={() => setOpened(!opened)}>
                  Encuentros
                </a>
              </li>
              <li className='font-bold text-3xl p-4 text-center hover:underline'>
                <a href='./'>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </header>}
      <main>
        <section className='flex flex-col items-center'>
          <h1 id='main' className='mt-16 mb-4'>Iglesia Proyecto de Vida</h1>
          <p className='mx-[5%] text-center'>El Proyecto de Vida es una iglesia cristiana ubicada en el barrio de Floresta. Se destaca por ser una comunidad comprometida con el crecimiento espiritual de sus miembros y el servicio a la comunidad circundante.
            La iglesia Proyecto de Vida tiene como objetivo principal brindar un ambiente acogedor y familiar, donde las personas puedan experimentar el amor de Dios y encontrar propósito y dirección en sus vidas. Su enfoque se basa en la enseñanza de la Biblia y en la aplicación práctica de sus principios en la vida diaria.
            La iglesia ofrece una variedad de actividades y programas para todas las edades, incluyendo servicios de adoración, estudios bíblicos, grupos de crecimiento, programas de ayuda social y actividades para niños y jóvenes. Además, se fomenta la participación activa de los miembros en la comunidad a través de proyectos de servicio y evangelización.
            El Proyecto de Vida busca ser una fuente de inspiración y apoyo para aquellos que desean vivir una vida centrada en Cristo. Su deseo es ayudar a las personas a desarrollar una relación profunda con Dios, descubrir su propósito en la vida y encontrar la plenitud y la felicidad en Él.
            En resumen, el Proyecto de Vida es una iglesia cristiana ubicada en Floresta que se dedica a guiar a las personas hacia una relación personal con Dios y a vivir una vida transformada por su amor y enseñanzas.El Proyecto de Vida es una iglesia cristiana ubicada en el barrio de Floresta. Se destaca por ser una comunidad comprometida con el crecimiento espiritual de sus miembros y el servicio a la comunidad circundante.
            La iglesia Proyecto de Vida tiene como objetivo principal brindar un ambiente acogedor y familiar, donde las personas puedan experimentar el amor de Dios y encontrar propósito y dirección en sus vidas. Su enfoque se basa en la enseñanza de la Biblia y en la aplicación práctica de sus principios en la vida diaria.
            La iglesia ofrece una variedad de actividades y programas para todas las edades, incluyendo servicios de adoración, estudios bíblicos, grupos de crecimiento, programas de ayuda social y actividades para niños y jóvenes. Además, se fomenta la participación activa de los miembros en la comunidad a través de proyectos de servicio y evangelización.
            El Proyecto de Vida busca ser una fuente de inspiración y apoyo para aquellos que desean vivir una vida centrada en Cristo. Su deseo es ayudar a las personas a desarrollar una relación profunda con Dios, descubrir su propósito en la vida y encontrar la plenitud y la felicidad en Él.
            En resumen, el Proyecto de Vida es una iglesia cristiana ubicada en Floresta que se dedica a guiar a las personas hacia una relación personal con Dios y a vivir una vida transformada por su amor y enseñanzas.El Proyecto de Vida es una iglesia cristiana ubicada en el barrio de Floresta. Se destaca por ser una comunidad comprometida con el crecimiento espiritual de sus miembros y el servicio a la comunidad circundante.
            La iglesia Proyecto de Vida tiene como objetivo principal brindar un ambiente acogedor y familiar, donde las personas puedan experimentar el amor de Dios y encontrar propósito y dirección en sus vidas. Su enfoque se basa en la enseñanza de la Biblia y en la aplicación práctica de sus principios en la vida diaria.
            La iglesia ofrece una variedad de actividades y programas para todas las edades, incluyendo servicios de adoración, estudios bíblicos, grupos de crecimiento, programas de ayuda social y actividades para niños y jóvenes. Además, se fomenta la participación activa de los miembros en la comunidad a través de proyectos de servicio y evangelización.
            El Proyecto de Vida busca ser una fuente de inspiración y apoyo para aquellos que desean vivir una vida centrada en Cristo. Su deseo es ayudar a las personas a desarrollar una relación profunda con Dios, descubrir su propósito en la vida y encontrar la plenitud y la felicidad en Él.
            En resumen, el Proyecto de Vida es una iglesia cristiana ubicada en Floresta que se dedica a guiar a las personas hacia una relación personal con Dios y a vivir una vida transformada por su amor y enseñanzas.
          </p>
        </section>

        <section className='mt-12'>
          <h2 className='text-center' id='schedule'>Horarios</h2>
          <p className='mx-[5%] text-center'>Horarios de las reuniones y cosas del face</p>
        </section>
      </main>
    </body>
  )
}

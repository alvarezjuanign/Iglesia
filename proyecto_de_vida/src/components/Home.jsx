import bibleBg from '../assets/header.jpg'
import contactBg from '../assets/cross.jpg'
import peopleBg from '../assets/people.jpg'

export function Home () {
  const SECTIONS = [
    {
      title: 'Iglesia',
      bg: bibleBg
    },
    {
      title: 'Encuentros',
      bg: contactBg
    },
    {
      title: 'Contacto',
      bg: peopleBg
    }
  ]

  return (
    <main>
      <ul className='h-screen w-full'>
        {SECTIONS.map((section, i) => (
          <li
            key={i}
            role='button'
            className='h-1/3
            overflow-hidden'
          >
            <div className='h-full relative transition-all hover:scale-110'>
              <div className='absolute bg-black opacity-0 w-full h-full flex items-center justify-center transition-all hover:opacity-70'>
                <h1 className='text-white text-xl font-bold ml-5 mb-5'>{section.title} ➜</h1>
              </div>
              <picture>
                <img src={section.bg} className='h-full w-full' />
              </picture>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

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
    <main className='h-screen'>
      <ul className='grid grid-cols-1 h-full'>
        {SECTIONS.map((sections, i) => (
          <li
            key={i}
            className='bg-cover bg-bottom flex justify-center items-center text-white font-bold text-2xl'
            style={{ backgroundImage: `url(${sections.bg})` }}
          >
            <a href={sections.title} className=''>{sections.title} ➜</a>
          </li>
        ))}
      </ul>
    </main>
  )
}

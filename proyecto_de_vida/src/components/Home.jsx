import bibleBg from '../assets/header.jpg'
import crossBg from '../assets/cross.jpg'
import peopleBg from '../assets/people.jpg'

export function Home () {
  const SECTIONS = [
    {
      title: 'Iglesia',
      bg: bibleBg
    },
    {
      title: 'Encuentros',
      bg: crossBg
    },
    {
      title: 'Contacto',
      bg: peopleBg
    }
  ]

  return (
    <ul className='h-screen'>
      {SECTIONS.map((section, i) => (
        <li
          key={i}
          style={{ backgroundImage: `url(${section.bg})` }}
          className='h-1/3 bg-cover bg-bottom'
        >
          <div className='backdrop-blur-sm h-full w-full flex flex-col items-start justify-end'>
            <h1 className='text-white text-xl font-bold ml-5 mb-5'>{section.title}</h1>
            <button className='text-white text-sm font-bold ml-5 mb-5'>Ir a ➜</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

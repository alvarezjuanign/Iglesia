import { useState } from 'react'
import { sections } from '../sections'
import './Home.css'

export function Home () {
  const [active, setActive] = useState(0)

  return (
    <ul>
      {sections.map((image, i) => (
        <li
          key={i}
          style={{ backgroundImage: `url(${image.bg})` }}
          role='button'
          className={active === i ? 'active' : ''}
          onClick={() => setActive(i)}
        >
          <h3 className='p-2 text-white'>{image.title}</h3>
          <div className='section-content'>
            <div className='inner'>
              <div className='bio'>
                <h2 className='p-2 text-white'>{image.title}</h2>
                <p className='text-white'>{image.description}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

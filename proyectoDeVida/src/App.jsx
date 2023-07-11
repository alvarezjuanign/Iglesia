import { Header } from './components/Header.jsx'
import { About } from './components/About.jsx'
import { Footer } from './components/Footer.jsx'
import jovenes from './assets/jovenes.webp'
import encuentros from './assets/encuentros.webp'
import momentos from './assets/momentos.webp'

export function App () {
  return (
    <main className='w-full bg-[#edebeb]'>
      <Header />

      <About
        animation='animate-fade-right animate-once animate-duration-[2000ms] animate-delay-200 animate-ease-in-out'
      >
        <img
          src={jovenes}
          alt='Los jóvenes de la iglesia'
          className='rounded-md'
        />
        <figcaption className='font-bold text-lg'>'Nuestros jóvenes'</figcaption>
        <p className='text-center [text-wrap:balance]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, neque aspernatur cupiditate architecto quos commodi. Fuga quidem libero ad ipsam, ea ratione beatae repudiandae blanditiis perferendis non, architecto exercitationem cum!</p>
      </About>
      <About
        animation='animate-fade-left animate-once animate-duration-[2000ms] animate-delay-200 animate-ease-in-out'
      >
        <img
          src={encuentros}
          alt='Encuentros en la iglesia'
          className='rounded-md'
        />
        <figcaption className='font-bold text-lg'>'Encuentros en la Iglesia'</figcaption>
        <p className='text-center [text-wrap:balance]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, neque aspernatur cupiditate architecto quos commodi. Fuga quidem libero ad ipsam, ea ratione beatae repudiandae blanditiis perferendis non, architecto exercitationem cum!</p>
      </About>
      <About
        animation='animate-fade-right animate-once animate-duration-[2000ms] animate-delay-200 animate-ease-in-out'
      >
        <img
          src={momentos}
          alt='Compartiendo festejos en la iglesia'
          className='rounded-md'
        />
        <figcaption className='font-bold text-lg'>'Compartiendo momentos'</figcaption>
        <p className='text-center [text-wrap:balance]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, neque aspernatur cupiditate architecto quos commodi. Fuga quidem libero ad ipsam, ea ratione beatae repudiandae blanditiis perferendis non, architecto exercitationem cum!</p>
      </About>

      <Footer />
    </main>
  )
}

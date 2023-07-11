import logoLocation from '../assets/location.svg'
import logoFacebook from '../assets/facebook.svg'

export function Footer () {
  return (
    <footer id='contact' className='bg-[#77C6CD]/50 h-28 flex flex-col items-center justify-center gap-3'>
      <div className='flex justify-center gap-4'>
        <a href='https://www.facebook.com/iglesiadedios.florestanorte'>
          <img src={logoFacebook} alt='ícono de facebook' className='h-6' />
        </a>
        <a href='https://goo.gl/maps/YZrSezH9TQe6Jyy76'>
          <img src={logoLocation} alt='ícono de ubicación' className='h-6' />
        </a>
      </div>
      <p className='text-center font-semibold'>©️ 2023. Proyecto de Vida todos los derechos reservados.</p>
    </footer>
  )
}

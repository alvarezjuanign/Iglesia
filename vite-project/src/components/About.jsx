import { useObserver } from '../hooks/useObserver'

export function About ({ children, animation }) {
  const [boxRef, isIntersected] = useObserver()

  return (
    <section ref={boxRef} className='p-6 flex flex-col items-center'>
      <figure
        className={isIntersected ? `${animation} flex flex-col items-center m-5` : ''}
        key='0'
      >
        {children}
      </figure>
    </section>
  )
}

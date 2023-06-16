import { useRouteError } from 'react-router-dom'

export default function ErrorPage () {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page' className='h-screen flex flex-col justify-center items-center gap-5'>
      <h1 className='font-bold text-xl'>Oops!</h1>
      <p>Disculpa, ocurrió un error. 😕</p>
    </div>
  )
}

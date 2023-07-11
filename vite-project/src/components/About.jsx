import { useObserver } from '../hooks/useObserver'
const items = [
  {
    itemId: 0,
    image: 'https://scontent.faep8-1.fna.fbcdn.net/v/t1.6435-9/39676124_966966570173251_8276950468190535680_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A7XZNdXOzBwAX92_k9A&_nc_oc=AQnYyxrkMdznfSDQFH3LK_eFnsGz-B35jdopFoKA4VkMfyd1_fHf5MVbZxnxHoG5pUM&_nc_ht=scontent.faep8-1.fna&oh=00_AfA-7okkBtCFnncSjRui7937CMBasGVO2_d3P0NUXpguRA&oe=64CE9CC8',
    title: 'Nuestros jóvenes',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid, quos, saepe repellendus dicta neque mollitia harum reprehenderit a tenetur sint provident rem omnis sunt natus, voluptatibus impedit nesciunt eligendi!'
  },
  {
    itemId: 1,
    image: 'https://scontent.faep8-3.fna.fbcdn.net/v/t1.6435-9/89972379_1381093502093887_3928487271459717120_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UHDDPLuw3CgAX9RCYFH&_nc_ht=scontent.faep8-3.fna&oh=00_AfDDvMiDueNXzrHindKF9W65RBL_S9JfoPARFpQVYnne2w&oe=64CE9F0F',
    title: 'Encuentros en la Iglesia',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid, quos, saepe repellendus dicta neque mollitia harum reprehenderit a tenetur sint provident rem omnis sunt natus, voluptatibus impedit nesciunt eligendi!'
  },
  {
    itemId: 2,
    image: 'https://scontent.faep8-1.fna.fbcdn.net/v/t39.30808-6/340618905_234415172429762_6663431013710218391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QPTsm2mcMe8AX854nA2&_nc_ht=scontent.faep8-1.fna&oh=00_AfBgBdfyuECEU0bmaqqiOgF7rk7D_FL8-zMRAldtZ45G8w&oe=64AB879D',
    title: 'Compartiendo momentos',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid, quos, saepe repellendus dicta neque mollitia harum reprehenderit a tenetur sint provident rem omnis sunt natus, voluptatibus impedit nesciunt eligendi!'
  }
]

export function About ({ srcImage, animation }) {
  const [boxRef, isIntersected] = useObserver()

  return (
    <section ref={boxRef} className='p-6 flex flex-col items-center'>
      <figure
        className={isIntersected ? `${animation} flex flex-col items-center m-5` : 'hidden'}
        key='0'
      >
        <img
          src={srcImage}
          alt=''
          className='rounded-md'
        />
        <figcaption className='font-bold text-lg'>Hola</figcaption>
        <p className='text-center [text-wrap:balance]'>Mundo</p>
      </figure>
    </section>
  )
}

import Image from 'next/image'
import CryptoApp from '../../public/img/projects/cryptoApp.png'
import GifApp from '../../public/img/projects/gifApp.jpg'
import Masterace from '../../public/img/projects/masterace.jpg'
import Tictactoe from '../../public/img/projects/tictactoe.png'
import TodoApp from '../../public/img/projects/todoApp.png'
import WeatherApp from '../../public/img/projects/weatherApp.jpg'
import Buttons from './Buttons'
const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <h2 className="font-Sora font-semibold text-3xl text-title_sec py-6">Projects</h2>
      <div className='px-4 md:px-28  py-2 md:m-2 grid md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-12  md:gap-12 pb-20'>
        <Image src={CryptoApp} width={380} height={290} alt="" className='p-10 rounded-lg' />
        <Image src={GifApp} width={380} height={290} alt="" className='p-10 rounded-lg' />
        <Image src={Masterace} width={380} height={290} alt="" className='p-10 rounded-lg' />
        <Image src={Tictactoe} width={380} height={290} alt="" className='p-10 rounded-lg' />
        <Image src={TodoApp} width={380} height={290} alt="" className='p-10 rounded-lg' />
        <Image src={WeatherApp} width={380} height={290} alt="" className='p-10 rounded-lg' />
      </div>
      <Buttons label='More Projects' onClick={() => { "" }} />
    </section>
  )
}

export default Projects

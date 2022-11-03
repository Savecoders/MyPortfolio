import Image, { StaticImageData } from 'next/image'
import Buttons from './Buttons'
import { useState } from 'react'
import getProyects from '../helpers/getProjects'
import { motion } from 'framer-motion'
import Link from 'next/link'


interface Project {
  id: number
  name: string
  description: string
  image: StaticImageData
  url: string
  date: string
}
const Projects = () => {

  const projects = getProyects()
  //const [selectedId, setSelectedId] = useState<Project | null>(null)

  return (

    <section id="Projects" className="flex flex-col items-center justify-center ">

      <h2 className="font-Sora font-semibold text-3xl text-title_sec py-6">Projects</h2>
      <div className='flex flex-wrap whitespace-nowrap justify-center items-center m-6 gap-6 pb-10 max-w-7xl '>


        {projects.map((project) => {

          return (
            <motion.div
              layout
              key={project.id}
              whileHover={{ scale: 1.04 }}
              className='px-3 pt-3 justify-center rounded-lg '
            >
              <ModalImage key={project.name} {...project} />
            </motion.div>
          )

        })}

      </div>

      <Buttons label='More Projects' onClick={() => { "" }} />

    </section >
  )
}


const ModalImage = (Proyect: Project) => {

  const { name, image, date, url } = Proyect
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div onClick={toggleOpen} className=''>
      <Link href={url}>
        <Image src={image} alt={name} width={320} height={240} className=' rounded-lg cursor-pointer' />
      </Link>
      <section className='flex justify-between  items-center py-1 text-center cursor'>
        <Link href={url} >
          <a className='font-Sora md:text-base font-medium text-icons'>
            {name}
          </a>
        </Link>
        <h6 className='font-Sora font-medium text-lg lg:text-base text-title'>{date}</h6>
      </section>
      {/* <AnimatePresence>{isOpen && <Content key={name} {...Proyect} />}</AnimatePresence> */}
    </motion.div>
  )

}
/* const Content = ({ description }: Project) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=' bg-sec rounded-lg'
    >
      <></>
    </motion.div>
  );
} */

export default Projects


//< Image src = { WeatherApp } width = { 380} height = { 290} alt = "" className = 'p-10 rounded-lg' />

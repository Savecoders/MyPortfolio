import Image, { StaticImageData } from 'next/image'
import Buttons from './Buttons'
import { useState } from 'react'
import getProyects from '../helpers/getProjects'
import { AnimatePresence, motion } from 'framer-motion'


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
  const [selectedId, setSelectedId] = useState<Project | null>(null)

  return (
    <section id="Projects" className="flex flex-col items-center justify-center ">

      <h2 className="font-Sora font-semibold text-3xl text-title_sec py-6">Projects</h2>
      <div className='px-4 md:px-16  py-2 md:m-2 grid md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-12  md:gap-12 pb-20'>

        {projects.map((project) => {

          const { id, name, description, date, image, url } = project

          return (
            <motion.div
              layoutId={name}
              key={id}
              onClick={() => setSelectedId({ ...project })}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1.1 }}
              className='bg-bg pt-5 px-4 justify-center rounded-lg cursor-pointer'
            >
              <Image src={image} alt={name} width={540} height={420} className=' rounded-lg' />
              <section className='flex justify-between al items-center py-3 text-center'>
                <h6 className='font-Sora font-semibold text-lg lg:text-base  text-title'>{name}</h6>
                <h6 className='font-Sora font-medium text-lg lg:text-base text-title'>{date}</h6>
              </section>
            </motion.div>
          )
        })}


      </div>
      <Buttons label='More Projects' onClick={() => { "" }} />
    </section>
  )
}

export default Projects


//  < Image src = { WeatherApp } width = { 380} height = { 290} alt = "" className = 'p-10 rounded-lg' />

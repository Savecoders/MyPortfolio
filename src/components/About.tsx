import { motion } from 'framer-motion'
import SvgWork from '../assets/icons/personal/Work'


const About = () => {
  return (
    <div
      id='About'
      className=' p-4 sm:p-12 xl:p-28 flex flex-col-reverse lg:flex-row justify-around items-center'>

      <motion.section
        className="py-10 lg:p-10 lg:m-8 xl:m-12 "
        whileHover={{ scale: 1.03 }}
      >
        <SvgWork />
      </motion.section>

      <motion.section
        className="max-w-xl bg-sec p-8 md:p-12 xl:m-8 rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="py-6 font-Sora font-bold text-2xl text-title_sec">About</h2>
        <div className="font-Inter text-lg text-primary">
          <p className="py-1">I am software developer based in Ecuador.</p>
          <p className="py-1">I am a passionate developer, I love to create and build things.</p>
          <p className="py-1">I am currently looking for a job in the software industry.</p>
        </div>

      </motion.section>

    </div>
  )
}

export default About
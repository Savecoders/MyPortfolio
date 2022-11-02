import { motion } from 'framer-motion'
import SvgWork from '../assets/icons/personal/Work'


const About = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.6 }}
      id='About'
      className=' p-4 sm:p-12 xl:p-28 flex flex-col-reverse lg:flex-row justify-around items-center'>

      <section className="p-10 m-8 xl:m-12 ">
        <SvgWork />
      </section>

      <section className="max-w-xl bg-sec p-8 md:p-12 xl:m-8 rounded-lg">
        <h2 className="py-6 font-Sora font-bold text-2xl text-title_sec">About</h2>
        <div className="font-Inter text-lg text-primary">
          <p className="py-1">I am software developer based in Ecuador.</p>
          <p className="py-1">I am a passionate developer, I love to create and build things.</p>
          <p className="py-1">I am currently looking for a job in the software industry.</p>
        </div>
      </section>

    </motion.div>
  )
}

export default About
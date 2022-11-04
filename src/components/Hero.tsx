import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import profile from '../../public/img/profile.jpg'
import SvgCoffe from '../assets/icons/personal/Coffe'
import { Linkedin, Github, Twitter } from '../assets/icons/social'
import Buttons from './Buttons'
const Hero = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=' flex flex-col lg:flex-row justify-around items-center  md:px-12 pt-12 2xl:pt-16 pb-16'>

      <section className="flex flex-col gap-y-11 2xl:gap-y-16 md:pl-7 text-left">
        <h2 className=" font-Inter  font-light text-2xl text-primary md:text-3xl 2xl:text-4xl">Hi, i am</h2>
        <h1 className=" font-Inter  font-bold text-3xl text-title_sec md:text-5xl 2xl:text-5xl">Pablo Pincay Alvarez</h1>
        <h2 className=" font-Inter  font-normal text-2xl text-primary md:text-3xl 2xl:text-4xl">I like to develop Websites.</h2>
        <div className="flex flex-col mb-8 pb-8 space-y-3 lg:space-y-2 lg:flex-row ">
          <Buttons label='Download CV' onClick={() => { "" }} />
        </div>
      </section>

      <div className=' flex flex-col justify-center items-center  xl:flex-row'>

        <div className="hidden  sm:flex items-center justify-center sm:p-8 rounded-full bg-sec ">
          <Image
            className='rounded-full -rotate-45 opacity-95 '
            alt="MyPersonalPhoto"
            src={profile}
            layout="intrinsic"
            width={260}
            height={260} />
        </div>

        <motion.div

          className={'whitespace-nowrap cursor-pointer hidden sm:flex justify-center items-center gap-x-2 relative float-right -top-16 -right-14 xl:top-24 xl:right-24 p-[0.4rem] bg-bg border-solid border-[2px] border-sec rounded-full hover:bg-sec'}
          onHoverStart={() => setIsOpen(!isOpen)}
          onHoverEnd={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.03 }}
        >
          <SvgCoffe />

          {isOpen && <motion.span
            layout
            className=' lg:hidden font-Sora text-cyan p-1'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            yes! Coffe + Code!

          </motion.span>}
        </motion.div>

        <section className='grid grid-cols-3 xl:grid-cols-1 py-6 lg:py-4 xl:p-12 xl:space-y-6 gap-x-8'>
          <Link href={"https://twitter.com/Save75_"} >
            <a >
              <Twitter />
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/pincay-alvarez-pablo-salvador-37a41520b/ "} >
            <a >
              <Linkedin />
            </a>
          </Link>
          <Link href={"https://github.com/Savecoders"} >
            <a href="">
              <Github />
            </a>
          </Link>
        </section>

      </div>
    </div >
  )
}

export default Hero
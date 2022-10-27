import Image from 'next/image'
import profile from '../../public/img/profile.jpg'
import { Linkedin, Github, Twitter } from '../assets/icons/social'
import Buttons from './Buttons'
const Hero = () => {
  return (
    <div className='flex flex-row justify-around items-center px-10 pt-12 2xl:pt-16 pb-20'>

      <section className="pl-7">
        <h2 className=" font-Inter mt-5 mb-9 font-light text-2xl text-primary lg:text-3xl 2xl:text-4xl">Hi, i am</h2>
        <h1 className=" font-Inter mt-5 mb-9 font-bold text-3xl text-title_sec lg:text-5xl 2xl:text-5xl">Pablo Pincay Alvarez</h1>
        <h2 className=" font-Inter mt-5 mb-9 font-normal text-2xl text-primary lg:text-3xl 2xl:text-4xl">I like to develop Websites.</h2>
        <div className="flex flex-col mb-8 space-y-3 lg:space-y-2 lg:flex-row ">
          <Buttons label='Download CV' onClick={() => { "" }} />
        </div>
      </section>

      <div className='flex flex-col justify-center items-center md:flex-row'>

        <div className="hidden  sm:flex items-center justify-center lg:p-8 rounded-full bg-sec ">
          <Image
            className='rounded-full -rotate-45'
            alt="MyPersonalPhoto"
            src={profile}
            layout="intrinsic"
            width={260}
            height={260} />
        </div>

        <section className='flex flex-row md:pl-14 md:flex-col space-y-6'>

          <Twitter />
          <Linkedin />
          <Github />
        </section>

      </div>
    </div>
  )
}

export default Hero
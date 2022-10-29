import Image from 'next/image'
import Link from 'next/link'
import profile from '../../public/img/profile.jpg'
import { Linkedin, Github, Twitter } from '../assets/icons/social'
import Buttons from './Buttons'
const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-center  md:px-10 pt-12 2xl:pt-16 pb-20'>

      <section className="md:pl-7">
        <h2 className=" font-Inter mt-5 mb-9 font-light text-2xl text-primary md:text-3xl 2xl:text-4xl">Hi, i am</h2>
        <h1 className=" font-Inter mt-5 mb-9 font-bold text-3xl text-title_sec md:text-5xl 2xl:text-5xl">Pablo Pincay Alvarez</h1>
        <h2 className=" font-Inter mt-5 mb-9 font-normal text-2xl text-primary md:text-3xl 2xl:text-4xl">I like to develop Websites.</h2>
        <div className="flex flex-col mb-8 pb-8 space-y-3 lg:space-y-2 lg:flex-row ">
          <Buttons label='Download CV' onClick={() => { "" }} />
        </div>
      </section>

      <div className='flex flex-col justify-center items-center  lg:flex-row'>

        <div className="hidden  sm:flex items-center justify-center sm:p-8 rounded-full bg-sec ">
          <Image
            className='rounded-full -rotate-45'
            alt="MyPersonalPhoto"
            src={profile}
            layout="intrinsic"
            width={260}
            height={260} />
        </div>

        <section className=' grid grid-cols-3 lg:grid-cols-1 p-12 lg:space-y-6 gap-x-8'>
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
    </div>
  )
}

export default Hero
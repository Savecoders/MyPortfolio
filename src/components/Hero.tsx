import Image from 'next/image'
import profile from '../../public/img/profile.jpg'
import { Linkedin, Github, Twitter } from './icons/social'


const Hero = () => {
  return (
    <footer className='h-3/5 flex flex-col justify-around items-center sm:flex-row sm:justify-evenly'>

      <div className="lg:max-w-lg">
        <h2 className=" font-Inter mt-4 mb-8 font-light text-1xl dark:text-primary lg:text-2xl ">Hi, i am</h2>
        <h1 className=" font-Inter mt-4 mb-8 font-bold text-1xl dark:text-title_sec lg:text-4xl ">Pablo Pincay Alvarez</h1>
        <h2 className=" font-Inter mt-4 mb-8 font-normal text-1xl dark:text-primary lg:text-2xl ">I like to develop Websites.</h2>
        <div className="flex flex-col mb-8 space-y-3 lg:space-y-2 lg:flex-row ">
          <button className=" px-14 py-4 text-sm tracking-wider font-bold bg-blue text-title uppercase rounded-md lg:w-auto">
            Download CV
          </button>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center md:flex-row'>

        <div className="hidden  sm:flex items-center justify-center lg:p-8 rounded-full bg-sec ">
          <Image
            className='rounded-full -rotate-45'
            alt="Mountains"
            src={profile}
            layout="intrinsic"
            width={240}
            height={240} />
        </div>

        <section className='flex flex-row pl-14 md:flex-col'>
          <Linkedin />
          <Github />
          <Twitter />
        </section>

      </div>
    </footer>
  )
}

export default Hero
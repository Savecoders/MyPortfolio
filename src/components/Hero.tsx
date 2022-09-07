import Image from 'next/image'
import profile from '../../public/img/profile.jpg'
import { Linkedin, Github, Twitter } from './icons/social'


const Hero = () => {
  return (
    <footer className='container px-16 py-8 mx-auto'>

      <section className="items-center lg:flex justify-around">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h2 className=" font-Inter mt-4 mb-8 font-light text-1xl dark:text-primary lg:text-2xl ">Hi, i am</h2>
            <h1 className=" font-Inter mt-4 mb-8 font-bold text-1xl dark:text-title_sec lg:text-4xl ">Pablo Pincay Alvarez</h1>
            <h2 className=" font-Inter mt-4 mb-8 font-normal text-1xl dark:text-primary lg:text-2xl ">I like to develop Websites.</h2>
            <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
              <button className="w-full px-6 py-2.5 text-sm tracking-wider font-bold bg-blue text-title uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="hidden  md:flex items-center justify-center lg:p-8 rounded-full bg-sec ">
          <Image
            className='rounded-full -rotate-45'
            alt="Mountains"
            src={profile}
            layout="intrinsic"
            width={240}
            height={240} />
        </div>

        <section className='flex flex-col'>
          <Linkedin />
          <Github />
          <Twitter />
        </section>

      </section>
    </footer>
  )
}

export default Hero
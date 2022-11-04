import Link from "next/link"
import { useState } from "react"
import { SvgCloseHamburger, SvgHambuger } from "../assets/icons"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav)
  return (

    <div>
      <nav className="p-4 sm:mt-3 mb-16 flex justify-between sm:justify-around items-center sm:bg-sec rounded-lg">
        <Link href={"#"}>
          <a className="text-xl font-Sora font-semibold text-title_sec lg:text-1xl hover:text-blue" href="#">SaveCode</a>
        </Link>
        <section className="hidden lg:block"></section>

        <section className="hidden  md:block sm:w-auto">

          <ul className="flex flex-col p-3 sm:flex-row md:space-x-12">
            <li className='pr-6 pl-3'>
              <Link href={"#About"}>
                <a className="text-lg font-semibold font-Sora text-title hover:text-icons ">About</a>
              </Link>
            </li>
            <li className='pr-6 pl-3'>
              <Link href={"#Skills"}>
                <a className="text-lg font-semibold font-Sora text-title hover:text-icons ">Skills</a>
              </Link>
            </li>
            <li className='pr-6 pl-3'>
              <Link href={"#Projects"}>
                <a className="text-lg font-semibold font-Sora text-title hover:text-icons ">Projects</a>
              </Link>
            </li>
          </ul>

        </section>
        <div className={!nav ? 'sm:hidden' : ""} onClick={handleClick}>
          {!nav ? <SvgHambuger /> : <SvgCloseHamburger />}
        </div>

      </nav>

      <ul className={!nav ? 'hidden' : 'px-4 m-2 mb-16 flex flex-col justify-center items-center bg-sec rounded-lg'}>
        <li className='py-2'>
          <Link href={"#About"} >
            <a onClick={handleClose} className="text-lg font-semibold font-Sora text-title">About</a>
          </Link>
        </li>
        <li className='py-2'>
          <Link href={"#Skills"}>
            <a onClick={handleClose} className="text-lg font-semibold font-Sora text-title">Skills</a>
          </Link>
        </li>
        <li className='py-2'>
          <Link href={"#Projects"}>
            <a onClick={handleClose} className="text-lg font-semibold font-Sora text-title ">Projects</a>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar

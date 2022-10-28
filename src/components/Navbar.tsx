import Link from "next/link"
import SvgVector from "../assets/icons/Vector"
const Navbar = () => {

  return (

    <nav className="p-4 sm:mt-3 mb-16 flex justify-between sm:justify-around items-center sm:bg-sec rounded-lg">


      <Link href={"#"}>
        <a className="text-xl font-Sora font-semibold text-title_sec lg:text-1xl" href="#">SaveCode</a>
      </Link>

      <section className="hidden lg:block"></section>

      <section className="hidden  md:block sm:w-auto">

        <ul className="flex flex-col p-3 sm:flex-row md:space-x-12">
          <li className='pr-6 pl-3'>
            <Link href={"#"}>
              <a className="text-lg font-semibold font-Sora text-title">Home</a>
            </Link>
          </li>
          <li className='pr-6 pl-3'>
            <Link href={"#"}>
              <a className="text-lg font-semibold font-Sora text-title">About</a>
            </Link>
          </li>
          <li className='pr-6 pl-3'>
            <Link href={"#"}>
              <a className="text-lg font-semibold font-Sora text-title ">Services</a>
            </Link>
          </li>
        </ul>

      </section>
      <div className=" sm:hidden">
        <SvgVector />
      </div>
    </nav>
  )
}

export default Navbar

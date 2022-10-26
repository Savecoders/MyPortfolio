import Link from "next/link"
const Navbar = () => {

  return (

    <nav className="p-4 mt-3 mb-16 flex justify-around items-center bg-sec rounded-lg">


      <Link href={"#"}>
        <a className="text-xl font-Sora font-semibold text-title_sec lg:text-1xl" href="#">SaveCode</a>
      </Link>

      <section></section>

      <section className="w-full md:block md:w-auto">

        <ul className="flex flex-col p-3 md:flex-row md:space-x-12">
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
    </nav>
  )
}

export default Navbar

import Link from "next/link"

const Navbar = () => {
  return (

    <nav className="flex m-auto justify-center items-center py-14 px-2 bg-bg">

      <div className="container flex items-center justify-between px-20 py-4 bg-sec rounded-lg">

        <Link href={"#"}>
          <a className="text-lg font-Sora font-semibold text-title_sec lg:text-1xl" href="#">Savecode</a>
        </Link>

        <section className="hidden w-full md:block md:w-auto">

          <ul className="flex flex-col p-2 md:flex-row md:space-x-8 md:mt-0">
            <li className='pr-6 pl-3'>
              <Link href={"#"}>
                <a className=" font-semibold font-Sora text-title">Home</a>
              </Link>
            </li>
            <li className='pr-6 pl-3'>
              <Link href={"#"}>
                <a className=" font-semibold font-Sora text-title text-base ">About</a>
              </Link>
            </li>
            <li className='pr-6 pl-3'>
              <Link href={"#"}>
                <a className=" font-semibold font-Sora text-title ">Services</a>
              </Link>
            </li>
          </ul>

        </section>

      </div>
    </nav>
  )
}

export default Navbar

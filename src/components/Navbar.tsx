import Link from "next/link"

const Navbar = () => {
  return (
    <nav className=" w-screen flex justify-center  bg-bg py-10">
      <div className="container flex items-center justify-between px-20 py-4  md:bg-sec rounded-lg">
        <Link href={"#"}>
          <a className="text-lg font-Sora font-semibold dark:text-title_sec lg:text-1xl" href="#">Savecode</a>
        </Link>
        <section className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className='pr-6 pl-3'>
              <Link href={"#"}>
                <a className=" font-semibold font-Sora text-title text-base block md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">Home</a>
              </Link>
            </li>
            <li className='pr-6 pl-3'>
              <Link href={"#"}>
                <a className=" font-semibold font-Sora text-title text-base block hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </Link>
            </li>
            <li className='pr-6 pl-3'>
              <Link href={"#"}>
                <a className=" font-semibold font-Sora text-title text-base block hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  )
}

export default Navbar

import { Javascript, Typescript, Git, Node, ReactIcon, Tailwindcss } from "../assets/icons/stacks"
const MoreSkills = () => {
  return (
    <>
      <div className='p-4 md:p-28 flex flex-col lg:flex-row justify-around items-center '>
        <section className=" max-w-xl bg-sec p-8 md:p-12 xl:m-8 rounded-lg ">
          <h2 className="py-6 font-Sora font-bold text-2xl text-title_sec">More</h2>
          <div className="font-Inter text-lg text-primary">
            <p>I have been studying web development in general in a self-taught way for about 2 years. I have knowledge of the following technologies.
            </p>
          </div>
        </section>
        <section className="flex justify-center  items-center flex-col max-w-lg md:m-2">
          <h2 className="font-Sora font-semibold text-3xl text-title_sec pt-9 pb-4">Skills</h2>
          <div className="grid grid-cols-3 ">
            <Javascript />
            <Typescript />
            <Git />
            <Node />
            <ReactIcon />
            <Tailwindcss />
          </div>
        </section>
      </div >
    </>
  )
}

export default MoreSkills
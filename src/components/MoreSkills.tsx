import { Javascript, Typescript, Git, Node, ReactIcon, Tailwindcss } from "../assets/icons/stacks"
const MoreSkills = () => {
  return (
    <>
      <div className=' bg-bg p-28 flex flex-row items-center justify-center '>
        <section className=" max-w-xl bg-sec p-12 m-8 rounded-lg">
          <h2 className="py-6 font-Sora font-bold text-2xl text-title_sec">More</h2>
          <div className="font-Inter text-lg text-primary">
            <p>I have been studying web development in general in a self-taught way for about 2 years. I have knowledge of the following technologies.
            </p>
          </div>
        </section>
        <section className="flex justify-evenly items-center flex-col max-w-lg p-8">
          <h2 className="font-Sora font-bold text-3xl text-title_sec ">Skills</h2>
          <div className="grid grid-cols-3">
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
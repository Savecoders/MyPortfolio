import SvgWork from '../assets/icons/personal/Work'

const About = () => {
  return (
    <div className=' bg-bg p-28 flex flex-row justify-around items-center'>
      <section className="p-6 m-8 rounded-md">
        <SvgWork />
      </section>
      <section className="max-w-xl bg-sec p-12 m-8 rounded-lg">
        <h2 className="py-6 font-Sora font-bold text-2xl text-title_sec">About</h2>
        <div className="font-Inter text-lg text-primary">
          <p className="py-1">I am software developer based in Ecuador.</p>
          <p className="py-1">I am a passionate developer, I love to create and build things.</p>
          <p className="py-1">I am currently looking for a job in the software industry.</p>
        </div>
      </section>
    </div>
  )
}

export default About
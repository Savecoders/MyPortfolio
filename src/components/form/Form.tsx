
const Form = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-28">
        <section className=" space-y-12">
          <div>
            <label className="text-title_sec font-Sora font-semibold block mb-6 text-xl">Email</label>
            <input type="email" className="px-72 py-6 rounded-md bg-sec" />
          </div>
          <div>
            <label className="text-title_sec font-Sora font-semibold block mb-6 text-xl">Message</label>
            <textarea typeof="email" className="w-full py-6  rounded-md bg-sec "></textarea>
          </div>
          <button className="font-bold font-Sora rounded-md bg-cyan w-full py-3 bg-theme text-title ">Send it!</button>
        </section>
      </div>
    </>
  )
}

export default Form
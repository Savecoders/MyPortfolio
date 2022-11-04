
const Form = () => {
  return (
    <form className="my-16 m-10 xl:m-32 2xl:m-48 space-y-14 ">
      <div>
        <label className="text-title_sec font-Sora font-semibold block mb-6 text-xl">Email</label>
        <input type="email" className="font-Inter text-lg text-primary p-5 w-full  rounded-md bg-sec " />
      </div>
      <div>
        <label className="text-title_sec font-Sora font-semibold block mb-6 text-xl ">Message</label>
        <textarea typeof="text" className="font-Inter text-lg text-primary p-5 w-full  rounded-md bg-sec "></textarea>
      </div>
      <button className="font-bold font-Sora rounded-md bg-cyan w-full py-3 bg-theme text-title ">Send it!</button>
    </form>
  )
}

export default Form
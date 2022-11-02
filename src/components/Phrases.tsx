import { motion } from "framer-motion"


export const Phrases = () => {
  return (
    <>
      <div
        className='py-8 xl:py-20 flex justify-center items-center'
      >
        <motion.section
          className="bg-sec px-10 py-4 md:px-32 m-2  rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="font-Inter text-xl text-center text-primary">
            <p>“ I can always learning a repeater ”
            </p>
          </div>
        </motion.section>
      </div>
    </>
  )
}

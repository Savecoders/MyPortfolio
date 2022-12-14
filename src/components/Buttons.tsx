
interface ButtonProps {
  label: string,
  onClick: () => void
}

const Buttons = ({ label, onClick }: ButtonProps) => {
  return (
    <button

      className=" px-14 py-4 sm:text-lg 2xl:text-1xl tracking-normal font-bold font-Sora bg-blue text-title rounded-md lg:w-auto hover:bg-cyan"
      onClick={onClick}
    >{label}
    </button>
  )
}

export default Buttons
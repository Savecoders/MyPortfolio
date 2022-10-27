
interface ButtonProps {
  label: string,
  onClick: () => void
}

const Buttons = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className=" px-14 py-4 lg:text-lg 2xl:text-1xl tracking-normal font-semibold font-Sora bg-blue text-title rounded-md lg:w-auto"
      onClick={onClick}
    >{label}
    </button>
  )
}

export default Buttons
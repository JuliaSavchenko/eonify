export const Button = (props) => {
  const { btnName, isValid } = props
  return (
    <>
      <button className="flex justify-center flex-row content-center items-center gap-4 w-80 h-14 rounded-xl bg-[#3461FD] text-[#FFFFFF]" type="submit" disabled={!isValid}>
        {btnName}
      </button>
    </>
  )
}

export const Title = (props) => {
  const { src, alt, text } = props

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <img src={src} alt={alt} />
      <h3 className="text-[#2A4ECA] text-3xl">{text}</h3>
      <p className="text-[#61677D] text-sm flex text-center">
        It was popularised in the 1960s with the release of Letraset
        sheetscontaining Lorem Ipsum.
      </p>
    </div>
  )
}

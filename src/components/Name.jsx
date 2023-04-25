export const Name = (props) => {
  const { register, errors } = props

  return (
    <>
      <label htmlFor="name">
        <input
          className="bg-[#F5F9FE] rounded-xl w-80 h-14 pl-4"
          placeholder="Name"
          type="text"
          name="name"
          {...register('name', {
            required: true,
            minLength: {
              value: 5,
              message: 'Short name (min 5 symbols)',
            },
          })}
        />
      </label>
      <div>{errors?.Name && <p>errors?.Name?.message || 'Error'</p>}</div>
    </>
  )
}

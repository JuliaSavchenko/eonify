export const Email = (props) => {
  const { register, errors } = props
  return (
    <>
      <label htmlFor="email">
        <input
          className="bg-[#F5F9FE] rounded-xl w-80 h-14 pl-4"
          placeholder="Email or Phone Number"
          type="email"
          name="email"
          id="email"
          {...register('email', {
            required: true,
            minLength: {
              value: 5,
              message: 'Wrong email form',
            },
          })}
        />
      </label>
      <div>{errors?.Email && <p>errors?.Email?.message || 'Error'</p>}</div>
    </>
  )
}

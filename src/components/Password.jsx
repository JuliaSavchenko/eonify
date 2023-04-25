export const Password = (props) => {
  const { register } = props
  return (
    <>
      <label htmlFor="password">
        <input
          className="bg-[#F5F9FE] rounded-xl w-80 h-14 pl-4"
          type="password"
          name="password"
          placeholder="Password"
          {...register('password', {
            minLength: {
              value: 5,
              message: 'Password must be more then 5 symbols',
            },
          })}
        />
      </label>
    </>
  )
}

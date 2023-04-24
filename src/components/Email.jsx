export const Email = (props) => {
  const { register, errors } = props;
  return (
    <>
      <label htmlFor='email'>
        <input
          placeholder="Email"
          type='email'
          name='email'
          id='email'
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
  );
};

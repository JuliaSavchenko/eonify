export const Name = (props) => {
  const { register, errors } = props;

  return (
    <>
      <label htmlFor='name'>
        <input
          placeholder="Name"
          type='text'
          name='name'
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
  );
};

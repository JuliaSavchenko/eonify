import { useForm } from 'react-hook-form';
import { Button } from './Button';
import { Name } from './Name';
import { Email } from './Email';
import { Password } from './Password';
import { Title } from './Title';

export const Authorization = () => {
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const onHandleSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className='flex flex-col'>
      <Title />
      <form onSubmit={handleSubmit(onHandleSubmit)} className='flex flex-col items-center '>
        <Name register={register} errors={errors} />
        <Email register={register} errors={errors} />
        <Password />
      </form>
      <Button ifValid={isValid} btnName='Create Account' />
    </div>
  );
};

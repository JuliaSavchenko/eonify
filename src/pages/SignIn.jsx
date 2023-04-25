import { Title } from '../components/Title'
import { Email } from '../components/Email'
import { Password } from '../components/Password'
import { Button } from '../components/Button'

export const SignIn = (props) => {
  const { register, errors, reset, isValid, watch, handleSubmit } = props

  const onHandleSubmit = (data) => {
    console.log(JSON.stringify(data))
    reset()
  }

  return (
    <div className="flex flex-col">
      <Title
        src={require('../images/signin.png')}
        alt={'sign in'}
        text={'Sign In'}
      />
      <form className="flex gap-4" handleSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex flex-col gap-4">
          <Email register={register} errors={errors} />
          <Password register={register} watch={watch} />
          <a href="/forget">Forget password?</a>
        </div>
        <div>
          <Button isValid={isValid} />
          <p>
            Don't have account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  )
}

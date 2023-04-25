import { Button } from '../components/Button'
import { Name } from '../components/Name'
import { Email } from '../components/Email'
import { Password } from '../components/Password'
import { Title } from '../components/Title'

export const SignUp = (props) => {
  const { register, errors, reset, isValid, watch, handleSubmit } = props

  const onHandleSubmit = (data) => {
    console.log(JSON.stringify(data))
    reset()
  }

  return (
    <div className="flex flex-col gap-y-16">
      <Title
        src={require('../images/signup.png')}
        alt={'sign up'}
        text={'Sign Up'}
      />
      <div>
        <form
          onSubmit={handleSubmit(onHandleSubmit)}
          className="flex flex-col items-center gap-16"
        >
          <div className="flex flex-col gap-y-4">
            <Name register={register} errors={errors} />
            <Email register={register} errors={errors} />
            <Password register={register} watch={watch} />
          </div>
          <div className="flex flex-col justify-center content-center items-center gap-y-5">
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="text-[#3B4054] text-xs mr-1"
              />
              I'm agree to The 
               <a className="text-[#3461FD]" href="/">
                Tarms of Service 
               </a>
               and 
               <a className="text-[#3461FD]" href="/">
                 Privacy Policy
              </a>
            </label>
            <Button ifValid={isValid} btnName="Create Account" />
            <p>
              Do you have account? <a className="text-[#3461FD]" href="/signin">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

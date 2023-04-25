import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { ForgetPassword } from './ForgetPassword'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const Main = () => {
  const {
    register,
    reset,
    watch,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SignUp
              register={register}
              errors={errors}
              reset={reset}
              isValid={isValid}
              watch={watch}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <SignIn
              register={register}
              errors={errors}
              reset={reset}
              isValid={isValid}
              watch={watch}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </Router>
  )
}

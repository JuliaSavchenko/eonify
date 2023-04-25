import SlideRoutes from 'react-slide-routes'
import { Route, useLocation } from 'react-router-dom'
import { EnterOTP } from './EnterOTP'
import { ResetPassword } from './ResetPassword'
import { ForgetPassword } from './ForgetPassword'

export const MainRecet = () => {
  const location = useLocation()

  return (
    <div>
      <SlideRoutes location={location}>
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/otp" element={<EnterOTP />} />
        <Route path="/reset" element={<ResetPassword />} />
      </SlideRoutes>
    </div>
  )
}

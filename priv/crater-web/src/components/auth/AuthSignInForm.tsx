import React from 'react'
import { withFormik, InjectedFormikProps, FormikErrors } from 'formik'
import axios from 'axios'
import Yup from 'yup'

interface AuthSignInFormValues {
  username: string
  password: string
}

interface AuthSignInFormProps {
  onFormFinished: () => void
}

type Props = InjectedFormikProps<AuthSignInFormProps, AuthSignInFormValues>

const AuthSignInForm: React.SFC<Props> = ({
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  isSubmitting
}) => (
  <div>
    <h2>Sign in</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          name="username"
        />
        {touched.username && errors.username && <div>{errors.username}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          name="password"
        />
        {touched.password && errors.password && <div>{errors.password}</div>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  </div>
)

export default withFormik<AuthSignInFormProps, AuthSignInFormValues>({
  mapPropsToValues: props => ({ username: '', password: '' }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    axios
      .post('/api/v1/users/sign-in', {
        user: values
      })
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setSubmitting(false)
        props.onFormFinished()
      })
      .catch(err => {
        console.error(err)
        setSubmitting(false)
      })
  }
})(AuthSignInForm)

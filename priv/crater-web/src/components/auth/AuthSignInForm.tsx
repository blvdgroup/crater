import React from 'react'
import { withFormik, InjectedFormikProps, FormikErrors } from 'formik'
import axios from 'axios'
import Yup from 'yup'

import FormLabel from '../ui/FormLabel'
import FormGroup from '../ui/FormGroup'
import TextInput from '../ui/TextInput'
import InputFeedback from '../ui/InputFeedback'
import Button from '../ui/Button'

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
  handleReset,
  values,
  dirty,
  isSubmitting
}) => (
  <div>
    <h2>sign in</h2>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor="username">Username</FormLabel>
        <TextInput
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          name="username"
          placeholder="Type a username"
        />
        {touched.username && errors.username && <InputFeedback>{errors.username}</InputFeedback>}
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextInput
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          name="password"
          placeholder="Type a password"
        />
        {touched.password && errors.password && <InputFeedback>{errors.password}</InputFeedback>}
      </FormGroup>
      <FormGroup>
        <Button kind="button" type="submit" color="primary" size="lg" disabled={isSubmitting}>
          Submit
        </Button>{' '}
        <Button kind="button" onClick={handleReset} size="lg">
          Reset
        </Button>{' '}
        <Button kind="button" size="lg" disabled>
          Disabled
        </Button>
      </FormGroup>
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

import * as React from 'react'
import { withFormik, InjectedFormikProps } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

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
  onFormFinished: (data: any) => void
  onFormError?: (err: any) => void
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
  status,
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
        {status && status.status === 'error' && <InputFeedback>{status.message}</InputFeedback>}
        {status && status.status === 'ok' && <InputFeedback valid>{status.message}</InputFeedback>}
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
  handleSubmit: (values, { setSubmitting, setStatus, props }) => {
    axios
      .post('/api/v1/users/sign-in', {
        user: values
      })
      .then(res => res.data)
      .then(data => {
        setSubmitting(false)
        setStatus(data)
        props.onFormFinished(data)
      })
      .catch(err => {
        const data = err.response.data
        setSubmitting(false)
        setStatus(data)
      })
  }
})(AuthSignInForm)

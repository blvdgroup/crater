import React from 'react'
import { InjectedFormikProps, withFormik } from 'formik'
import Yup from 'yup'

import FormGroup from '../ui/FormGroup'
import FormLabel from '../ui/FormLabel'
import TextInput from '../ui/TextInput'
import InputFeedback from '../ui/InputFeedback'

interface CreateSnippetFormValues {
  title: string
  description: string
  language: string
  body: string
}

type Props = InjectedFormikProps<{}, CreateSnippetFormValues>

const CreateSnippetForm: React.SFC<Props> = ({
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
    <h2>CreateSnippetForm</h2>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor="title">title</FormLabel>
        <TextInput
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
          name="title"
          placeholder="Type a title"
        />
        {touched.title && errors.title && <InputFeedback>{errors.title}</InputFeedback>}
      </FormGroup>
    </form>
  </div>
)

export default withFormik<{}, CreateSnippetFormValues>({
  mapPropsToValues: props => ({ title: '', description: '', language: '', body: '' }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required')
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(values)
  }
})(CreateSnippetForm)

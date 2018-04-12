import * as React from 'react'
import { InjectedFormikProps, withFormik } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'

import { colors } from 'styles/variables'
import CodeMirror from './CodeMirror'
import FormGroup from '../ui/FormGroup'
import FormLabel from '../ui/FormLabel'
import TextInput from '../ui/TextInput'
import Button from '../ui/Button'
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
  setFieldTouched,
  values,
  dirty,
  setFieldValue,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <FormGroup>
      <FormLabel htmlFor="title" screenReader>
        title
      </FormLabel>
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
    <CodeMirror
      value={values.body}
      field="body"
      onChange={setFieldValue}
      onBlur={setFieldTouched}
      touched={touched.body}
      errors={errors.body}
    />
    <FormGroup>
      <Button kind="button" type="submit" color="primary" size="lg" disabled={isSubmitting}>
        Submit
      </Button>{' '}
      <Button kind="button" onClick={handleReset} size="lg">
        Reset
      </Button>
    </FormGroup>
  </form>
)

export default withFormik<{}, CreateSnippetFormValues>({
  mapPropsToValues: props => ({ title: '', description: '', language: 'javascript', body: '' }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Code is required')
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(values)
    setSubmitting(false)
  }
})(CreateSnippetForm)

import React from 'react'
import { InjectedFormikProps, withFormik } from 'formik'
// TODO: Replace with Controlled editor and hook up with Formik
import { UnControlled as CodeMirror } from 'react-codemirror2'
import styled from 'styled-components'
import Yup from 'yup'

import FormGroup from '../ui/FormGroup'
import FormLabel from '../ui/FormLabel'
import TextInput from '../ui/TextInput'
import InputFeedback from '../ui/InputFeedback'
import { colors } from 'styles/variables'

// Dynamic imports with every theme/mode change?
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/mode/javascript/javascript'

interface CreateSnippetFormValues {
  title: string
  description: string
  language: string
  body: string
}

type Props = InjectedFormikProps<{}, CreateSnippetFormValues>

const CodeEditor = styled(CodeMirror)`
  border: 1px dotted ${colors.grey};
`

const CreateSnippetForm: React.SFC<Props> = ({
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  handleReset,
  values,
  dirty,
  setFieldValue,
  isSubmitting
}) => (
  <div>
    <h2>CreateSnippetForm</h2>
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor="title" hidden>
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
      <FormGroup>
        <CodeEditor
          value={values.body}
          options={{
            mode: 'javascript',
            theme: '3024-night',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            setFieldValue('body', value)
          }}
          onBlur={handleBlur}
        />
        {touched.body && errors.body && <InputFeedback>{errors.body}</InputFeedback>}
      </FormGroup>
    </form>
  </div>
)

export default withFormik<{}, CreateSnippetFormValues>({
  mapPropsToValues: props => ({ title: '', description: '', language: '', body: '' }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Code is required')
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(values)
  }
})(CreateSnippetForm)

import * as React from 'react'
import { InjectedFormikProps, withFormik } from 'formik'
import { Controlled as CodeEditor, IInstance } from 'react-codemirror2'
import { EditorChange } from 'codemirror'
import styled from 'styled-components'

import { colors } from 'styles/variables'
import InputFeedback from '../ui/InputFeedback'
import FormGroup from '../ui/FormGroup'

// Dynamic imports with every theme/mode change?
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/mode/javascript/javascript'

interface CodeMirrorProps {
  value?: string
  field: string
  onChange: (field: string, value: any) => void
  onBlur: (field: string, isTouched?: boolean | undefined) => void
  touched?: (true & string) | (false & string)
  errors?: any
}

interface CodeMirrorState {
  value: string
}

const StyledCodeEditor = styled(CodeEditor)`
  border: 1px dotted ${colors.grey};
`

class CodeMirror extends React.Component<CodeMirrorProps, CodeMirrorState> {
  constructor(props: CodeMirrorProps) {
    super(props)

    this.state = {
      value: this.props.value || ''
    }
  }
  public render() {
    const { touched, errors } = this.props
    const { value } = this.state

    return (
      <FormGroup>
        <StyledCodeEditor
          value={value}
          options={{
            mode: 'javascript',
            theme: '3024-night',
            lineNumbers: true
          }}
          onBeforeChange={this.handleBeforeChange}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {touched && errors && <InputFeedback>{errors}</InputFeedback>}
      </FormGroup>
    )
  }

  private handleBeforeChange = (editor: IInstance, data: EditorChange, value: string) => {
    this.setState({ value })
  }

  private handleChange = (editor: IInstance, data: EditorChange, value: string) => {
    this.props.onChange(this.props.field, value)
  }

  private handleBlur = () => {
    this.props.onBlur(this.props.field, true)
  }
}

export default CodeMirror

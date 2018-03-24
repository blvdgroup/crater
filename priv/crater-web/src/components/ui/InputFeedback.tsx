import * as React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/variables'

interface InputFeedbackProps {
  className?: string
  valid?: boolean
}

const InputFeedback: React.SFC<InputFeedbackProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
)

export default styled(InputFeedback)`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: ${props => (props.valid ? colors.green : colors.red)};
`

import React from 'react'
import styled from 'styled-components'

const StyledFormLabel = styled.label`
  display: ${props => (props.hidden ? 'none' : 'inline-block')};
  margin-bottom: 0.5rem;
`

interface FormLabelProps {
  className?: string
  htmlFor?: string
  screenReader?: boolean
}

const FormLabel: React.SFC<FormLabelProps> = ({ className, htmlFor, children, screenReader }) => (
  <StyledFormLabel className={className} htmlFor={htmlFor} hidden={screenReader}>
    {children}
  </StyledFormLabel>
)

export default FormLabel

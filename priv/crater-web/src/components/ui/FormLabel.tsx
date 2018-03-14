import React from 'react'
import styled from 'styled-components'

const StyledFormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`

interface FormLabelProps {
  className?: string
  htmlFor?: string
}

const FormLabel: React.SFC<FormLabelProps> = ({ className, htmlFor, children }) => (
  <StyledFormLabel className={className} htmlFor={htmlFor}>
    {children}
  </StyledFormLabel>
)

export default FormLabel

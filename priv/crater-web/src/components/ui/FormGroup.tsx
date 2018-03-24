import * as React from 'react'
import styled from 'styled-components'

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`

interface FormGroupProps {
  className?: string
}

const FormGroup: React.SFC<FormGroupProps> = ({ className, children }) => (
  <StyledFormGroup className={className}>{children}</StyledFormGroup>
)

export default FormGroup

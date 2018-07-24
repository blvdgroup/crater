import * as React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/variables'

interface TextInputProps {
  id?: string
  className?: string
  name: string
  type: 'text' | 'file' | 'textarea' | 'email' | 'password'
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  placeholder?: string
}

const TextInput: React.SFC<TextInputProps> = ({
  className,
  type,
  name,
  id,
  value,
  placeholder,
  onChange,
  onBlur,
  ...props
}) => (
  <input
    className={className}
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    {...props}
  />
)

export default styled(TextInput)`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  color: ${colors.grey};
  background-color: transparent;
  background-clip: padding-box;
  border: 1px dotted ${colors.grey};

  &:placeholder {
    color: ${colors.greyBorder};
  }
`

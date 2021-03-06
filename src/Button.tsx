import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement>{
children: ReactNode
variant:'primary'|'secondary'

}
const Button = ({children,...props}:Props) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Button
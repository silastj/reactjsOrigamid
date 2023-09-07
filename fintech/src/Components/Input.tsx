import React from 'react'

type IDateInput = React.ComponentProps<'input'> & {
  label: string
}

const geralStyles: React.CSSProperties = {
  padding: '5px',
  cursor:'pointer',
}

const inputStyles: React.CSSProperties = {
  border:'none',
  borderBottom: '1px solid ',
  marginBottom: '20px', 
  ...geralStyles
}


const Input = ({label, ...props}: IDateInput) => {
  return (
    <>
    <label htmlFor={label} style={geralStyles}
    >{label}</label>
    <input type="date" style={inputStyles} id={label} name={label} {...props}/>
    </>
  )
}

export default Input
import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="shadow-xs rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      {...props}
    />
  )
}

export { Button, type ButtonProps }

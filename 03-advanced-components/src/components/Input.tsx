import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type InputPros = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputPros>(function Input(
  { id, label, ...props },
  ref,
) {
  return (
    <p>
      <label>
        {label}
        <input id={id} {...props} ref={ref} />
      </label>
    </p>
  )
})

export default Input

import type { ComponentPropsWithoutRef } from 'react'

type InputPros = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'>

export default function Input({ id, label, ...props }: InputPros) {
  return (
    <p>
      <label>
        {label}
        <input id={id} {...props} />
      </label>
    </p>
  )
}

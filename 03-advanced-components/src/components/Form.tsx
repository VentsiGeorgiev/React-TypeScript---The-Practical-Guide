import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
  type SyntheticEvent,
} from 'react'

export type FormHandle = {
  clear: () => void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

const Form = forwardRef<FormHandle, FormProps>(function Form(
  props: FormProps,
  ref,
) {
  const form = useRef<HTMLFormElement>(null)

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING')
        form.current?.reset()
      },
    }
  })

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    props.onSave(data)
  }

  return (
    <form onSubmit={handleSubmit} {...props} ref={form}>
      {props.children}
    </form>
  )
})

export default Form

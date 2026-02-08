import { useRef } from 'react'

import Input from './UI/Input.tsx'
import Form, { type FormHandle } from './UI/Form.tsx'
import Button from './UI/Button.tsx'
import { useTimersContext } from '../store/timers-context.ts'

export default function AddTimer() {
  const form = useRef<FormHandle>(null)
  const { addTimer } = useTimersContext()

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string }
    addTimer({ name: extractedData.name, duration: +extractedData.duration })
    form.current?.clear()
  }

  return (
    <Form onSave={handleSaveTimer} ref={form}>
      <Input type='text' label='Name' id='name' name='name' />
      <Input type='number' label='Duration' id='duration' name='duration' />
      <p>
        <Button el='button'>Add Timer</Button>
      </p>
    </Form>
  )
}

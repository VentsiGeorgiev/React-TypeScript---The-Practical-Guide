import './App.css'
import Input from './components/Input'
import Form, { type FormHandle } from './components/Form'
import Button from './components/Button'
import { useRef } from 'react'

function App() {
  const customForm = useRef<FormHandle>(null)
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string }
    console.log(extractedData)

    customForm.current?.clear()
  }
  return (
    <main>
      <h1>Hello World</h1>
      <Form onSave={handleSave} ref={customForm}>
        <Input id='name' label='Your name' type='text' name='name' />
        <Input id='age' label='Age' type='number' name='age' />
        <p>
          <Button el='button'>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App

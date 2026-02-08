import './App.css'
import Button from './components/Button'
import ButtonV2 from './components/ButtonV2'
import Container from './components/Container'
import Input from './components/Input'

function App() {
  return (
    <main>
      <h1>Hello World</h1>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
      <p>
        <Button el='button'>A Button</Button>
      </p>
      <p>
        <Button el='anchor' href='https://react.dev/' target='_blank'>
          A Link
        </Button>
      </p>
      <p>
        <ButtonV2>New button</ButtonV2>
      </p>
      <p>
        <ButtonV2 href='https://react.dev/'>New Link</ButtonV2>
      </p>
      <Container as={Button} el='button'>
        Click me
      </Container>
    </main>
  )
}

export default App

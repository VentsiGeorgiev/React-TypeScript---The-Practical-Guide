import { useTimersContext } from '../store/timers-context'
import Button from './UI/Button'

export default function Header() {
  const { isRunning, startTimers, stopTimers } = useTimersContext()
  return (
    <header>
      <h1>React Timer</h1>
      <Button el='button' onClick={isRunning ? stopTimers : startTimers}>
        {isRunning ? 'Stop' : 'Start'} Timers
      </Button>
    </header>
  )
}

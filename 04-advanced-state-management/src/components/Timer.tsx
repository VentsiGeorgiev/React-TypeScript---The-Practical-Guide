import { useEffect, useRef, useState } from 'react'
import type { Timer as TimerProps } from '../store/timers-type'
import Container from './UI/Container'
import { useTimersContext } from '../store/timers-context'

export default function Timer({ name, duration }: TimerProps) {
  const intervalRef = useRef<number | null>(null)
  const [remainingTime, setRemainingTime] = useState(duration * 1000)
  const { isRunning } = useTimersContext()

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    if (remainingTime === 0) return

    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        const next = Math.max(prev - 50, 0)

        if (next === 0 && intervalRef.current !== null) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }

        return next
      })
    }, 50)

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning, remainingTime])

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>Duration: {duration}</p>
      <p>{formattedRemainingTime}</p>
    </Container>
  )
}

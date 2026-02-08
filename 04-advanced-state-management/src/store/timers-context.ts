import { createContext, useContext } from 'react'
import type { TimersContextValue } from './timers-type'

export const TimersContext = createContext<TimersContextValue | null>(null)

export function useTimersContext() {
  const ctx = useContext(TimersContext)

  if (!ctx) {
    throw new Error(
      'useTimersContext must be used within TimersContextProvider',
    )
  }

  return ctx
}

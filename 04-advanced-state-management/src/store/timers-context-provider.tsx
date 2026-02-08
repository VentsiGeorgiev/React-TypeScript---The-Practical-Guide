import { useReducer, type ReactNode } from 'react'
import { TimersContext } from './timers-context'
import type { TimersContextValue } from './timers-type'
import timersReducer, { initialState } from './timers-reducer'

type TimersContextProviderProps = {
  children: ReactNode
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState)

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      console.log('TIMER - DATA -------', timerData)
      dispatch({ type: 'ADD_TIMER', payload: timerData })
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' })
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' })
    },
  }

  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}

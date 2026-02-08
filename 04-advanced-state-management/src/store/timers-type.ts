export type Timer = {
  name: string
  duration: number
}

export type TimersState = {
  isRunning: boolean
  timers: Timer[]
}

export type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimers: () => void
  stopTimers: () => void
}

type AddTimersAction = {
  type: 'ADD_TIMER'
  payload: Timer
}
type StartTimersAction = {
  type: 'START_TIMERS'
}
type StopTimersAction = {
  type: 'STOP_TIMERS'
}

export type Action = AddTimersAction | StartTimersAction | StopTimersAction

import type { Action, TimersState } from './timers-type'

export const initialState: TimersState = {
  isRunning: false,
  timers: [],
}

export default function timersReducer(
  state: TimersState,
  action: Action,
): TimersState {
  switch (action.type) {
    case 'ADD_TIMER':
      return { ...state, timers: [...state.timers, action.payload] }

    case 'START_TIMERS':
      return { ...state, isRunning: true }

    case 'STOP_TIMERS':
      return { ...state, isRunning: false }

    default:
      return state
  }
}

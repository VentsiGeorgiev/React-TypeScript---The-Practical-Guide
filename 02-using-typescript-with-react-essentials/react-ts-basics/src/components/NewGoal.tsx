import { useRef, type SyntheticEvent } from 'react'
import type { CourseGoalType } from '../App'

type NewGoalProps = {
  onAddGoal: (newGoal: CourseGoalType) => void
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const id = Math.random()
    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    const newGoal: CourseGoalType = {
      id,
      title: enteredGoal,
      description: enteredSummary,
    }

    onAddGoal(newGoal)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Your goal
          <input type='text' id='goal' ref={goal} />
        </label>
      </p>
      <p>
        <label>
          Short summary
          <input type='text' id='summary' ref={summary} />
        </label>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}

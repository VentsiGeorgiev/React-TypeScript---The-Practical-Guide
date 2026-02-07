import type { CourseGoalType as CGoal } from '../App'
import CourseGoal from './CourseGoal'

type CourseGoalListProps = {
  goals: CGoal[]
  onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
          />
        </li>
      ))}
    </ul>
  )
}
